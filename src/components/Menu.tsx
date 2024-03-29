import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterLink, IonMenuToggle } from '@ionic/react';

interface MenuProps {
  onMenuToggle: () => void;
}

const Menu: React.FC<MenuProps> = ({ onMenuToggle }) => {
  return (
    <IonMenu contentId="main-content" onIonDidClose={onMenuToggle} type="overlay">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button routerLink='/home' onClick={onMenuToggle}>
            Home
          </IonItem>
          <IonItem button routerLink='/tab1' onClick={onMenuToggle}>
            ToDo-list
          </IonItem>
          <IonItem button routerLink='/tab2' onClick={onMenuToggle}>
            Contact
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
}

export default Menu;
