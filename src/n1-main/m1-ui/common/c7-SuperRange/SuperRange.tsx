import React from 'react';
import {Slider, SliderProps} from '@mui/material';

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                maxWidth: '147px',
                height: '4px',
                color: '#00CC22',
                borderRadius: '10px',
                "& .MuiSlider-thumb": {
                    width: '18px',
                    height: '18px',
                    background: '#FFFFFF',
                    border: '1px solid #00CC22',
                    boxShadow: 'none',
                    "&::after": {
                        content: '""',
                        position: 'absolute',
                        width: '6px',
                        height: '6px',
                        top: '50%',
                        left: '50%',
                        background: '#00CC22',
                    },
                },
                "& .MuiSlider-rail": {
                    color: '#8B8B8B',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    );
};

export default SuperRange;
