import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

/*
FlatList: Este componente se encarga de renderizar una lista de libros en tu aplicación.
*/

interface Book {
    id: string;
    title: string;
    author: string;
}

interface Props {
    books: Book[];
    onPressBook: (book: Book) => void;
}

const ListBooksComponent: React.FC<Props> = ({ books, onPressBook }) => {
    return (
        <FlatList
            data={books}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => onPressBook(item)}>
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.author}</Text>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
        />
    );
};

export default ListBooksComponent;