import { Controller } from "react-hook-form"
import { Label } from "../ui/label"
import CountrySelectPopoverCommand from "./CountrySelectPopoverCommand"


const CountrySelectField = ({
    name,
    label,
    control,
    error,
    required = false
}: CountrySelectProps) => {
    return (
        <div className="space-y-2">
            <Label htmlFor={name} className="form-label">
                {label}
            </Label>

            <Controller 
                name={name as "email" | "fullName" | "password" | "country" | "investmentGoals" | "riskTolerance" | "preferredIndustry"}
                control={control}
                rules={{
                    required: required ? `Harap pilih ${label.toLowerCase()}` : false
                }}
                render={({ field }) => (
                    <CountrySelectPopoverCommand 
                        value={field.value}
                        onChange={field.onChange}  
                    />
                )}
            />
            {error && (
                <p className="text-sm text-red-500">
                    {error.message}
                </p>
            )}
            <p className="text-xs text-gray-500">
                Membantu kami menampilkan data pasar dan berita yang relevan dengan Anda.
            </p>
        </div>
    )
}

export default CountrySelectField