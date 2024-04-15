// app/tabs/index.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

import BooksTab from './BooksTab';

const TabIndex = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  // Simular una lista de libros obtenidos de la API REST
  useEffect(() => {
    // Aquí iría tu lógica para obtener los libros de la API REST
    const dummyBooks = [
      { id: 1, title: 'Libro 1', author: 'Autor 1', description: 'Descripción del Libro 1' },
      { id: 2, title: 'Libro 2', author: 'Autor 2', description: 'Descripción del Libro 2' },
      // Otros libros...
    ];
    setBooks(dummyBooks);
  }, []);

  const handleBookPress = (book) => {
    setSelectedBook(book);
  };

  const handleAddBook = () => {
    // Aquí podrías implementar la lógica para agregar un nuevo libro
  };

  const handleEditBook = (book) => {
    // Aquí podrías implementar la lógica para editar el libro seleccionado
  };

  const handleDeleteBook = (book) => {
    // Aquí podrías implementar la lógica para eliminar el libro seleccionado
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Lista de Libros</Text>
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleBookPress(item)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      {selectedBook && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 20 }}>Detalles del Libro:</Text>
          <Text>Titulo: {selectedBook.title}</Text>
          <Text>Autor: {selectedBook.author}</Text>
          <Text>Descripción: {selectedBook.description}</Text>
          <Button title="Editar" onPress={() => handleEditBook(selectedBook)} />
          <Button title="Eliminar" onPress={() => handleDeleteBook(selectedBook)} />
          <Button title="Agregar Nuevo Libro" onPress={handleAddBook} />
        </View>
      )}
    </View>
  );
};

export default TabIndex;
export { BooksTab };
