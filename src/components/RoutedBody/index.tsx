import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../../scenes/Home';
import { Box } from '@mui/material';
import * as Styled from './routedBodyStyles';

const RoutedBody: React.FC = () => {
    return (
        <Styled.RoutedBodyWrapper>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Styled.RoutedBodyWrapper>
    );
};

export default RoutedBody;
