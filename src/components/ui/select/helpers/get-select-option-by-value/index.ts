import ISelect from '@components/ui/select/model'

export const getSelectOptionByValue = (value: ISelect.Option['value'] | null, options: ISelect.Option[]): ISelect.Option | null => {
    if (value === null) return null

    return options.find((item) => item.value === value) || null
}
