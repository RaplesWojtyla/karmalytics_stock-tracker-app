'use client'

import CountrySelectField from "@/components/forms/CountrySelectField"
import FootlerLink from "@/components/forms/FootlerLink"
import InputField from "@/components/forms/InputField"
import SelectField from "@/components/forms/SelectField"
import { Button } from "@/components/ui/button"
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from "@/lib/constants"
import { SubmitHandler, useForm } from "react-hook-form"

const SignUp = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting }
    } = useForm<SignUpFormData>({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            country: 'ID',
            investmentGoals: 'Growth',
            riskTolerance: 'Medium',
            preferredIndustry: 'Technology'
        },
        mode: 'onBlur'
    })

    const onSubmit: SubmitHandler<SignUpFormData> = async (data: SignUpFormData) => {
        try {
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <h1 className="form-title">Buat Akun & Personalisasi</h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
            >
                <InputField 
                    name="fullName"
                    label="Nama Lengkap"
                    placeholder="Massukkan nama lengkap anda"
                    register={register}
                    error={errors.fullName}
                    validation={{
                        required: 'Nama lengkap wajib diisi',
                        minLength: {
                            value: 2,
                            message: 'Nama terlalu pendek'
                        }
                    }}
                />

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
                        },
                    }}
                />

                {/** Country */}
                <CountrySelectField
                    name="country"
                    label="Negara Domisili"
                    control={control}
                    error={errors.country}
                    required
                />

                <InputField 
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Buat password yang aman"
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

                <SelectField 
                    name="investmentGoals"
                    label="Tujuan Investasi"
                    placeholder="Pilih tujuan investasi anda"
                    control={control}
                    options={INVESTMENT_GOALS}
                    error={errors.investmentGoals}
                    required
                />
                
                <SelectField 
                    name="riskTolerance"
                    label="Toleransi Risiko"
                    placeholder="Pilih tingkat risiko anda"
                    control={control}
                    options={RISK_TOLERANCE_OPTIONS}
                    error={errors.riskTolerance}
                    required
                />
                
                <SelectField 
                    name="preferredIndustry"
                    label="Preferensi Sektor Industri"
                    placeholder="Pilih sektor industri yang diminati"
                    control={control}
                    options={PREFERRED_INDUSTRIES}
                    error={errors.preferredIndustry}
                    required
                />

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="yellow-btn w-full mt-5"
                >
                    { isSubmitting ? 'Sedang Memproses...' : 'Mulai Investasi Sekarang' }
                </Button>

                <FootlerLink 
                    text="Sudah memiliki akun?"
                    linkText="Masuk"
                    href="/sign-in"
                />
            </form>
        </>
    )
}

export default SignUp