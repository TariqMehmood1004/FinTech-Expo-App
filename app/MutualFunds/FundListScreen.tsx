// FundListScreen.tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import api from '@/utils/api';

// Define the type for the fund data
interface Fund {
    id: string;
    name: string;
}

// Fetch function to get mutual funds
const fetchFunds = async (): Promise<Fund[]> => {
    const response = await api.get('/funds/all');
    return response.data;
};

// FundListScreen component
const FundListScreen: React.FC = () => {

    const { data, error, isLoading } = useQuery<Fund[]>({
        queryKey: ['funds'], // Query key
        queryFn: fetchFunds // Query function
    });

    if (isLoading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return <Text style={styles.errorText}>Error fetching data</Text>;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Text style={styles.itemText}>{item.name}</Text>}
            />
        </View>
    );
};

// Styles for the component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        textAlign: 'center',
        color: 'red',
    },
    itemText: {
        fontSize: 18,
        marginVertical: 8,
    },
});

export default FundListScreen;
