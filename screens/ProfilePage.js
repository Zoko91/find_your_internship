import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView } from "react-native";
import UsersService from "../api/UsersService";
import LoadingPage from "../components/LoadingPage";
import UserHeader from "../components/UserHeader";
import Support from "../components/Support";
import AccountSettings from "../components/AccountSettings";

const ProfilePage = ({ navigation, route }) => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useFocusEffect(
    // --------------------- Explication  ---------------------
    // Ce hook permet de recharger le composant à chaque fois que l'on arrive sur la page
    // Très important pour permettre de modifier l'image de profil
    React.useCallback(() => {
      getUser();
      return () => {
        // This code will be executed when the screen loses focus
        // You can use it to clean up any resources that were allocated in the callback
      };
    }, [])
  );

  const getUser = async () => {
    try {
      const response = await UsersService.findUserById(
        route.params.usertest.id
      );
      setUser(response);
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = (name) => {
    navigation.navigate(name);
  };

  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    getUser();
  }, [navigation]);
  useEffect(() => {
    setIsLoading(false);
  }, [user]);

  const UserPage = () => {
    return (
      <ScrollView style={{ flex: 1 }}>
        <UserHeader navigate={navigate} user={user} />
        <AccountSettings navigate={navigate} />
        <Support navigate={navigate} />
      </ScrollView>
    );
  };

  return isLoading ? <LoadingPage /> : <UserPage />;
};

export default ProfilePage;
