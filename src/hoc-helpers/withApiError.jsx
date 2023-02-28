import React, { useState } from "react"
import ErrorMessage from "@components/ErrorMessage"

export const withApiError = (Component) => {
    return props => {
        const [apiError, setApiError] = useState(false)
        return (
            <>
                {
                    apiError ? <ErrorMessage /> : <Component
                        setApiError={setApiError}
                        {...props}
                    />
                }
            </>
        )
    }
}