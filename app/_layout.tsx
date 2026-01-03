import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CasperProvider } from "@/providers/CasperProvider";
import { AdminProvider } from "@/providers/AdminProvider";
import { ErrorBoundary } from "react-error-boundary";
import { View, Text, StyleSheet } from "react-native";


SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

function RootLayoutNav() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="admin" options={{ presentation: "modal", animation: "fade" }} />
      <Stack.Screen name="employee" options={{ presentation: "modal", animation: "fade" }} />
      <Stack.Screen name="partner" options={{ presentation: "modal", animation: "fade" }} />
    </Stack>
  );
}

function ErrorFallback({ error }: { error: Error }) {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorTitle}>App Error</Text>
      <Text style={styles.errorMessage}>{error.message}</Text>
      <Text style={styles.errorStack}>{error.stack?.slice(0, 500)}</Text>
    </View>
  );
}

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <CasperProvider>
          <AdminProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <RootLayoutNav />
            </GestureHandlerRootView>
          </AdminProvider>
        </CasperProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',
  },
  errorTitle: {
    color: '#ff4444',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  errorMessage: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  errorStack: {
    color: '#888',
    fontSize: 12,
    fontFamily: 'monospace',
  },
});