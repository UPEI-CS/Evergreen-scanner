import { ItemStatus } from "@/lib/eg-client/src/types/circ";

export type LibraryItem = {
  id: number;
  title: string | "N/A";
  barcode: string;
  callNumber: string | "N/A";
  status: ItemStatus | "N/A";
  shelvingLocation: string | "N/A";
  orgUnitLocation: string | "N/A";
  inHouseUseCount: number | 0;
  inventoryDateTime: Date | "N/A";
  circModifier: string | "N/A";
  orgUnitId: number
};
export type ChangeableFields = keyof Pick<LibraryItem, "status" | "inHouseUseCount" | "inventoryDateTime">
export type Step = 1 | 2 | 3
export interface ItemDisplayState {
  step: Step
  item: LibraryItem
  updatedItem: LibraryItem
  showConfirmation: boolean
  hasUpdated: boolean
}

export type ItemDisplayAction =
  | { type: "CONFIRM_ITEM" }
  | { type: "SCAN_NEW_ITEM" }
  | { type: "GO_BACK" }
  | { type: "UPDATE_INFO" }
  | { type: "SHOW_CONFIRMATION" }
  | { type: "HIDE_CONFIRMATION" }
  | { type: "SAVE_CHANGES" }
  | { type: "INCREMENT_USE_COUNT" }
  | { type: "UPDATE_STATUS"; payload: ItemStatus }
  | { type: "UPDATE_INVENTORY_DATE"; payload: Date }
  | { type: "CLEAR_UPDATE_NOTIFICATION" }

export function itemDisplayReducer(state: ItemDisplayState, action: ItemDisplayAction): ItemDisplayState {
  switch (action.type) {
    case "CONFIRM_ITEM":
      return { ...state, step: 2 }

    case "SCAN_NEW_ITEM":
      return { ...state, step: 1 }

    case "GO_BACK":
      return {
        ...state,
        step: state.step > 1 ? (state.step - 1) as Step : 1,
      }

    case "UPDATE_INFO":
      return {
        ...state,
        step: 3,
        updatedItem: { ...state.item },
      }

    case "SHOW_CONFIRMATION":
      return { ...state, showConfirmation: true }

    case "HIDE_CONFIRMATION":
      return { ...state, showConfirmation: false }

    case "SAVE_CHANGES":
      return {
        ...state,
        showConfirmation: false,
        item: { ...state.updatedItem },
        step: 1,
        hasUpdated: true,
      }

    case "INCREMENT_USE_COUNT":
      if (state.updatedItem.inHouseUseCount > state.item.inHouseUseCount) {
        return state
      }
      return {
        ...state,
        updatedItem: {
          ...state.updatedItem,
          inHouseUseCount: state.updatedItem.inHouseUseCount + 1,
        },
      }

    case "UPDATE_STATUS":
      return {
        ...state,
        updatedItem: {
          ...state.updatedItem,
          status: action.payload,
        },
      }

    case "UPDATE_INVENTORY_DATE":
      return {
        ...state,
        updatedItem: {
          ...state.updatedItem,
          inventoryDateTime: action.payload,
        },
      }

    case "CLEAR_UPDATE_NOTIFICATION":
      return {
        ...state,
        hasUpdated: false,
      }

    default:
      return state
  }
} 