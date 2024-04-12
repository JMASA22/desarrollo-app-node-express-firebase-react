import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import ListBooksComponent from './components/ListBooksComponent';
import firestore from '@react-native-firebase/firestore';

const HomeScreen = () => {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const unsubscribe = firestore()
            .collection('books')
            .onSnapshot(querySnapshot => {
                const fetchedBooks = [];
                querySnapshot.forEach(documentSnapshot => {
                    fetchedBooks.push({ id: documentSnapshot.id, ...documentSnapshot.data() });
                });
                setBooks(fetchedBooks);
                setLoading(false);
            });

        return () => unsubscribe();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <ListBooksComponent books={books} />
            )}
        </View>
    );
};

export default HomeScreen;
