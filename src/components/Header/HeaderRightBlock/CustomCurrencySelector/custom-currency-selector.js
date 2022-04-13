import React, {Component} from 'react'

export class CustomCurrencySelector extends Component {

    render() {
        const {
            currenciesArray,
            onCurrencyClick,
            currentCurrencyNumber,
            isCurrencySelectorOpen
        } = this.props

        const arrowDirection = isCurrencySelectorOpen ? 'up' : 'down'

        return (
            <div className='custom-currency-selector-wrapper'>
                <div className='custom-currency-selector-caption'>
                    <div className='custom-current-currency'>{currenciesArray[currentCurrencyNumber].symbol}</div>
                    <div className={`custom-currency-selector-arrow-${arrowDirection} custom-currency-selector-arrow`}/>
                </div>
                {isCurrencySelectorOpen &&
                <div
                    className='custom-currency-selector-options'
                >
                    {currenciesArray.map((currency, index) => {
                        return (
                            <div
                                key={index}
                                className='custom-currency-selector-option'
                                onClick={() => {
                                    onCurrencyClick(index)
                                }}
                            >
                                <div className='custom-currency-selector-symbol'>{currency.symbol}</div>
                                <div className='custom-currency-selector-label'>{currency.label}</div>
                            </div>
                        )
                    })}

                </div>
                }
            </div>
        )
    }
}
