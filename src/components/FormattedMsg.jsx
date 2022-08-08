import React from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'

function FormattedMsg() {
    return (
        <p>
            <IntlProvider locale="en" defaultLocale="en">
            <FormattedMessage
                id="myMessage"
                defaultMessage="Today is {ts, date, ::yyyyMMdd}"
                values={{ ts: Date.now() }}
            />
            <br />
            <FormattedNumber value={19} style="currency" currency="EUR" />
            </IntlProvider>
        </p>
    )
}

export default FormattedMsg;