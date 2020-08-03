import React, { useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { BlipChat } from "blip-chat-widget";

const Home: React.FC = () => {
  useEffect(() => {
    new BlipChat()
      .withAppKey(
        "d2hhdHNhcHBib3Q2OmQ2MGE0YWZmLTE4YWEtNDYxZi1hMDRmLWRlZmYxNDczZDAzYg=="
      )
      .withButton({ color: "#7895fd" })
      .build();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BLiP Chat Ionic</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">BLiP Chat Ionic</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Home;
