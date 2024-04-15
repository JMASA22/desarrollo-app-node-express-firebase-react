

import React from 'react';
import { View, Text, Button } from 'react-native';

const BooksTab = () => {
    return (
        <View>
            <Text>Mis Libros</Text>
            {/* Aquí tener una lista de libros */}
            <Button title="Agregar Libro" onPress={handleAddBook} />
        </View>
    );
};

export default BooksTab;
