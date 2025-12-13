'use client'

import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Check,
    ChevronsUpDown,
} from "lucide-react"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { useMemo, useState } from "react"
import countryList from 'react-select-country-list';
import { cn } from "@/lib/utils"
import Flag from "react-world-flags"

type CountryType = {
    label: string
    value: string
}

const CountrySelectPopoverCommand = ({
    value,
    onChange
}: {
    value: string,
    onChange: (value: string) => void
}) => {
    const [open, setOpen] = useState<boolean>(false)
    const countries = useMemo<CountryType[]>(() => countryList().getData(), [])

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role='combobox'
                    aria-expanded={open}
                    className="country-select-trigger"
                >
                    {value ? (
                        <span className="flex items-center gap-3">
                            <div className="flex h-4 w-6 items-center overflow-hidden rounded-xs border">
                                <Flag code={value} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <span>{countries.find(c => c.value === value)?.label}</span>
                        </span>
                    ) : (
                        'Pilih negara anda...'
                    )}
                    <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className='w-full p-0 bg-gray-800 border-gray-600'
                align='start'
            >
                <Command className="bg-gray-800 border-gray-600">
                    <CommandInput
                        placeholder="Cari nama negara..."
                        className="country-select-input"
                    />
                    <CommandList className='max-h-60 bg-gray-800 scrollbar-hide-default'>
                        <CommandEmpty className="country-select-empty">
                            Negara tidak ditemukan.
                        </CommandEmpty>
                        <CommandGroup className="bg-gray-800">
                            {countries.map(country => (
                                <CommandItem
                                    key={country.value}
                                    value={`${country.label} ${country.value}`}
                                    onSelect={() => {
                                        onChange(country.value)
                                        setOpen(false)
                                    }}
                                    className="country-select-item"
                                >
                                    <Check
                                        className={cn(
                                            'mr-2 h-4 w-4 text-yellow-500',
                                            value === country.value ? 'opacity-100' : 'opacity-0'
                                        )}
                                    />
                                    <span className="flex items-center gap-2">
                                        <div className="mr-2 flex h-4 w-6 items-center overflow-hidden rounded-xs border">
                                            <Flag
                                                code={country.value}
                                                fallback={<span>🏳️</span>}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        </div>
                                        <span>{country.label}</span>
                                    </span>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default CountrySelectPopoverCommand
