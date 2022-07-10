import { createSlice } from "@reduxjs/toolkit";
import { ClientSchema } from "../infra/Schemas/Client.schema";
import { ProviderSchema } from "../infra/Schemas/Provider.schema";

export type State = {
  valueProvider?: ProviderSchema;
  valueClient?: ClientSchema;
  isLogged: boolean;
  type: string;
};

export type ReduxProps = {
  user: State;
};

type Login = {
  payload: {
    valueProvider?: ProviderSchema;
    valueClient?: ClientSchema;
    type: string;
  };
};

export const slice = createSlice({
  name: "user",
  initialState: {
    isLogged: false,
    type: "",
  },
  reducers: {
    login(state: State, { payload }: Login) {
      return {
        ...state,
        isLogged: true,
        type: payload.type,
        valueClient: payload.valueClient,
        valueProvider: payload.valueProvider,
      };
    },
    logout(state: State) {
      return { ...state, isLogged: false };
    },
  },
});

export const { login, logout } = slice.actions;

export const selectorUser = (state: ReduxProps) => {
  if (state.user.type === "client") {
    return state.user.valueClient;
  }
  return state.user.valueProvider;
};

export default slice.reducer;
