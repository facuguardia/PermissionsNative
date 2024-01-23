import { createContext } from "react";
import { PermissionStatus } from "react-native-permissions";



export interface PermissionsState {
    locationStatus: PermissionStatus;
}

export const permissionsInitState: PermissionsState = {
    locationStatus: 'unavailable',
}

export const PermissionsContext = createContext({});


export const PermissionsProvider = ({ children }: any) => {

    return (
        <PermissionsContext.Provider value={{
            permissions: permissionsInitState,
            askLocationPermission: () => { }
        }}>
            {children}
        </PermissionsContext.Provider>
    )
}



