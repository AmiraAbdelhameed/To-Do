import React, { useReducer } from 'react';

// Reducer function
const formReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                fields: { ...state.fields, [action.field]: action.value },
                errors: { ...state.errors, [action.field]: '' },
            };
        case 'VALIDATE_FORM':
            const errors = {};
            if (!state.fields.name || state.fields.name.length < 2) {
                errors.name = 'Name is required and must be at least 2 characters';
            }
            if (!state.fields.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.fields.email)) {
                errors.email = 'Valid email is required';
            }
            if (!state.fields.address || state.fields.address.length < 5) {
                errors.address = 'Address is required and must be at least 5 characters';
            }
            if (!state.fields.creditCard || !/^\d{16}$/.test(state.fields.creditCard)) {
                errors.creditCard = 'Credit card must be exactly 16 digits';
            }
            return {
                ...state,
                errors,
                status: Object.keys(errors).length === 0 ? 'submitted' : 'idle',
            };
        case 'RESET_FORM':
            return initialState;
        default:
            return state;
    }
};

// Initial state
const initialState = {
    fields: {
        name: '',
        email: '',
        address: '',
        creditCard: '',
    },
    errors: {
        name: '',
        email: '',
        address: '',
        creditCard: '',
    },
    status: 'idle',
};

// CheckoutForm component
function CheckoutForm() {
    const [state, dispatch] = useReducer(formReducer, initialState);
    const { fields, errors, status } = state;

    const handleChange = (e) => {
        dispatch({
            type: 'UPDATE_FIELD',
            field: e.target.name,
            value: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'VALIDATE_FORM' });
    };

    const handleReset = () => {
        dispatch({ type: 'RESET_FORM' });
    };

    if (status === 'submitted') {
        return (
            <div>
                <h2>Order Placed Successfully!</h2>
                <button onClick={handleReset}>Place Another Order</button>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={fields.name}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                        />
                    </label>
                    {errors.name && <p style={{ color: 'red', fontSize: '14px' }}>{errors.name}</p>}
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={fields.email}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                        />
                    </label>
                    {errors.email && <p style={{ color: 'red', fontSize: '14px' }}>{errors.email}</p>}
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>
                        Address:
                        <input
                            type="text"
                            name="address"
                            value={fields.address}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                        />
                    </label>
                    {errors.address && <p style={{ color: 'red', fontSize: '14px' }}>{errors.address}</p>}
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>
                        Credit Card (16 digits):
                        <input
                            type="text"
                            name="creditCard"
                            value={fields.creditCard}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                            maxLength="16"
                        />
                    </label>
                    {errors.creditCard && <p style={{ color: 'red', fontSize: '14px' }}>{errors.creditCard}</p>}
                </div>

                <button
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        background: '#28a745',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    Submit Order
                </button>
            </form>
        </div>
    );
}

export default CheckoutForm;