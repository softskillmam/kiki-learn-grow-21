
-- Insert admin account into auth.users and profiles
DO $$
DECLARE
  admin_user_id UUID;
BEGIN
  -- Insert admin user into auth.users
  INSERT INTO auth.users (
    id,
    instance_id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    recovery_sent_at,
    last_sign_in_at,
    raw_app_meta_data,
    raw_user_meta_data,
    created_at,
    updated_at,
    confirmation_token,
    email_change,
    email_change_token_new,
    recovery_token
  ) VALUES (
    gen_random_uuid(),
    '00000000-0000-0000-0000-000000000000',
    'authenticated',
    'authenticated',
    'kiki@admin.com',
    crypt('KIKI@123', gen_salt('bf')),
    NOW(),
    NOW(),
    NOW(),
    '{"provider": "email", "providers": ["email"]}',
    '{"full_name": "KIKI"}',
    NOW(),
    NOW(),
    '',
    '',
    '',
    ''
  )
  RETURNING id INTO admin_user_id;

  -- Insert admin profile
  INSERT INTO public.profiles (
    id,
    email,
    full_name,
    role,
    created_at,
    updated_at
  ) VALUES (
    admin_user_id,
    'kiki@admin.com',
    'KIKI',
    'admin',
    NOW(),
    NOW()
  );
END $$;
