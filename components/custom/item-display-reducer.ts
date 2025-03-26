import type { ItemStatus } from "@/lib/eg-client/src/types/index"

export type LibraryItem = {
  id: number
  title: string | "N/A"
  barcode: string
  callNumber: string | "N/A"
  status: ItemStatus | "N/A"
  shelvingLocation: string | "N/A"
  orgUnitLocation: string | "N/A"
  inHouseUseCount: number | 0
  inventoryDateTime: Date | "N/A"
  circModifier: string | "N/A"
  orgUnitId: number
}
export type ChangeableFields = keyof Pick<LibraryItem, "status" | "inHouseUseCount" | "inventoryDateTime">
export type Step = 1 | 2 | 3 | 4 | 5 | 6


export type ItemDisplayAction =
  | { type: "CONFIRM_ITEM" }
  | { type: "SCAN_NEW_ITEM" }
  | { type: "GO_BACK" }
  | { type: "UPDATE_INFO" }
  | { type: "SAVE_CHANGES" }
  | { type: "INCREMENT_USE_COUNT" }
  | { type: "UPDATE_STATUS"; payload: ItemStatus }
  | { type: "UPDATE_INVENTORY_DATE"; payload: Date }
  | { type: "SHOW_ACTION_OPTIONS" }
  | { type: "RECORD_IN_HOUSE_USE" }
  | { type: "UPDATE_INVENTORY" }
  | { type: "CHANGE_STATUS" }
  | { type: "CHECK_IN_ITEM" }
export interface ItemDisplayState {
  step: Step
  item: LibraryItem
  updatedItem: LibraryItem
  hasUpdated: boolean
}


export function itemDisplayReducer(state: ItemDisplayState, action: ItemDisplayAction): ItemDisplayState {
  switch (action.type) {
    case "CONFIRM_ITEM":

      return { 
        ...state, 
        step: 2,
        updatedItem: { ...state.item } 
      }

    case "SCAN_NEW_ITEM":
      return { ...state, step: 1 }

    case "GO_BACK":

      if (state.step > 2) {
        return {
          ...state,
          step: 2,
          updatedItem: { ...state.item }, 
        }
      }
      
      if (state.step === 2) {
        return {
          ...state,
          step: 1,
        }
      }
      
      return {
        ...state,
        step: state.step > 1 ? ((state.step - 1) as Step) : 1,
      }

    case "SHOW_ACTION_OPTIONS":
      return {
        ...state,
        step: 2,
        updatedItem: { ...state.item },
      }

    case "UPDATE_INFO":
      return {
        ...state,
        step: 3,
        updatedItem: { ...state.item },
      }

    case "RECORD_IN_HOUSE_USE":
      return {
        ...state,
        step: 3,
        updatedItem: {
          ...state.item,
          inHouseUseCount: state.item.inHouseUseCount + 1,
        },
      }

    case "UPDATE_INVENTORY":
      return {
        ...state,
        step: 4,
        updatedItem: {
          ...state.item,
          inventoryDateTime: new Date(),
        },
      }

    case "CHANGE_STATUS":
      return {
        ...state,
        step: 5,
        updatedItem: { ...state.item },
      }

    case "CHECK_IN_ITEM":
      return {
        ...state,
        step: 6,
        updatedItem: {
          ...state.item,
          status: "Available" as ItemStatus,
        },
      }

    case "SAVE_CHANGES":
      return {
        ...state,
        step: 1,
        hasUpdated: true,
      }

    case "INCREMENT_USE_COUNT":
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

    default:
      return state
  }
}

