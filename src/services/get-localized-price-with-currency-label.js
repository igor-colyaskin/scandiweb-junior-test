import {currenciesToLanguages} from "../constants/get-language-for-currency"

export const getLocalizedPrice = (x = 0, currencyLabel = 'USD') => {
    return new Intl.NumberFormat(
        `${currenciesToLanguages[currencyLabel]}`,
        {style: 'currency', currency: `${currencyLabel}`}).format(x)
}
