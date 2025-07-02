
-- Create a public storage bucket for uploaded images
INSERT INTO storage.buckets (id, name, public)
VALUES ('public-images', 'public-images', true);

-- Create storage policies to allow public access
CREATE POLICY "Public images are publicly accessible"
ON storage.objects FOR SELECT
USING (bucket_id = 'public-images');

CREATE POLICY "Authenticated users can upload public images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'public-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update their public images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'public-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete their public images"
ON storage.objects FOR DELETE
USING (bucket_id = 'public-images' AND auth.role() = 'authenticated');
