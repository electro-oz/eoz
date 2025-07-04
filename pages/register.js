import { useForm } from 'react-hook-form';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { supabase } from '@/lib/supabaseClient';

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (values) => {
    // TODO: verify hCaptcha token
    // TODO: call Supabase RPC or insert into 'customers' table
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Register as Customer</h1>
      <input {...register('firstName', { required: true })} placeholder="First Name" />
      {errors.firstName && <span>First name is required</span>}
      <input {...register('lastName', { required: true })} placeholder="Last Name" />
      {/* Address fields powered by Google Places Autocomplete */}
      <input {...register('addressLine1', { required: true })} placeholder="Street No. / Apt" />
      <input {...register('addressLine2')} placeholder="Street Name" />
      <input {...register('suburb', { required: true })} placeholder="Suburb" />
      <input {...register('postcode', { required: true, pattern: /^\d{4}$/ })} placeholder="Postcode" />
      <select {...register('state', { required: true })}>
        <option value="">Select State</option>
        <option value="NSW">New South Wales</option>
        <option value="VIC">Victoria</option>
        {/* etc */}
      </select>
      <div>
        <span>+61</span>
        <input {...register('mobile', { required: true, pattern: /^\d{9}$/ })} placeholder="412345678" />
      </div>
      <input {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })} placeholder="Email" />
      <HCaptcha
        sitekey={process.env.HCAPTCHA_SITEKEY}
        onVerify={(token) => console.log('hCaptcha token:', token)}
      />
      <button type="submit">Register</button>
    </form>
  );
}
