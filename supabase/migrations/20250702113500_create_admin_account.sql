
-- First, delete any existing admin account to avoid conflicts
DELETE FROM auth.users WHERE email = 'kiki@admin.com';
DELETE FROM public.profiles WHERE email = 'kiki@admin.com';

-- Insert admin account into auth.users and profiles
DO $$
DECLARE
  admin_user_id UUID;
BEGIN
  -- Generate a new UUID for the admin user
  admin_user_id := gen_random_uuid();
  
  -- Insert admin user into auth.users with proper password hashing
  INSERT INTO auth.users (
    id,
    instance_id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    email_change_confirm_status,
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
    admin_user_id,
    '00000000-0000-0000-0000-000000000000',
    'authenticated',
    'authenticated',
    'kiki@admin.com',
    crypt('KIKI@123', gen_salt('bf')),
    NOW(),
    0,
    NOW(),
    '{"provider": "email", "providers": ["email"]}',
    '{"full_name": "KIKI Admin"}',
    NOW(),
    NOW(),
    '',
    '',
    '',
    ''
  );

  -- Insert admin profile with explicit admin role
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
    'KIKI Admin',
    'admin',
    NOW(),
    NOW()
  );
  
  -- Verify the account was created
  IF EXISTS (SELECT 1 FROM auth.users WHERE email = 'kiki@admin.com') THEN
    RAISE NOTICE 'Admin account created successfully with ID: %', admin_user_id;
  ELSE
    RAISE EXCEPTION 'Failed to create admin account';
  END IF;
  
EXCEPTION
  WHEN OTHERS THEN
    RAISE NOTICE 'Error creating admin account: %', SQLERRM;
    RAISE;
END $$;

-- Additional verification query
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = 'kiki@admin.com') THEN
    RAISE EXCEPTION 'Admin account verification failed - account does not exist';
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM public.profiles WHERE email = 'kiki@admin.com' AND role = 'admin') THEN
    RAISE EXCEPTION 'Admin profile verification failed - profile does not exist or role is incorrect';
  END IF;
  
  RAISE NOTICE 'Admin account verification successful';
END $$;
