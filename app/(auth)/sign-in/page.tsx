'use client'

import FooterLink from "@/components/forms/FooterLink"
import InputField from "@/components/forms/InputField"
import { Button } from "@/components/ui/button"
import { SubmitHandler, useForm } from "react-hook-form"

const SignIn = () => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm<SignInFormData>({
        defaultValues: {
            email: "",
            password: ""
        },
        mode: 'onBlur'
    })

    const onSubmit: SubmitHandler<SignInFormData> = async (data: SignInFormData) => {
        try {
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <h1 className="form-title">Masuk ke Akun Anda</h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
            >
                <InputField
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Masukkan alamat email anda"
                    register={register}
                    error={errors.email}
                    validation={{
                        required: 'Email wajib diisi',
                        pattern: {
                            value: /^\w+@\w+\.\w+$/,
                            message: 'Format email tidak valid'
                        }
                    }}
                />

                <InputField
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Masukkan password anda"
                    register={register}
                    error={errors.password}
                    validation={{
                        required: 'Password wajib diisi',
                        minLength: {
                            value: 8,
                            message: 'Password minimal 8 karakter'
                        }
                    }}
                />

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="yellow-btn w-full mt-5"
                >
                    {isSubmitting ? 'Sedang memuat...' : 'Masuk'}
                </Button>

                <FooterLink
                    text="Belum memiliki akun?"
                    linkText="Daftar Sekarang"
                    href="/sign-up"
                />
            </form>
        </>
    )
}

export default SignIn