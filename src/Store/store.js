import { createStore } from "redux";

const initialState = {
  sales: [],
  tech: [],
  marketing: [],
};

const salesReducer = (state = initialState, action) => {
  if (action.type === "SALES") {
    return {
      ...state,
      sales: action.payload.sales,
    };
  }
  if (action.type === "TECH") {
    return {
      ...state,
      tech: action.payload.tech,
    };
  }
  if (action.type === "MARKETING") {
    return {
      ...state,
      marketing: action.payload.marketing,
    };
  }
  if (action.type === "SALES_UPDATE_ITEM") {
    const { id, checked } = action.payload;

    const item = state.sales.find((item) => item.id === id);
    let updatedSales;
    if (item) {
      updatedSales = state.sales.map((item) =>
        item.id === id ? { ...item, checked } : item
      );
    }
    return {
      ...state,
      sales: updatedSales,
    };
  }

  if (action.type === "TECH_UPDATE_ITEM") {
    const { id, checked } = action.payload;

    const item = state.tech.find((item) => item.id === id);
    let updatedTech;
    if (item) {
      updatedTech = state.tech.map((item) =>
        item.id === id ? { ...item, checked } : item
      );
    }
    return {
      ...state,
      tech: updatedTech,
    };
  }
  if (action.type === "MARKETING_UPDATE_ITEM") {
    const { id, checked } = action.payload;

    const item = state.marketing.find((item) => item.id === id);
    let updatedMarketing;
    if (item) {
      updatedMarketing = state.marketing.map((item) =>
        item.id === id ? { ...item, checked } : item
      );
    }
    return {
      ...state,
      marketing: updatedMarketing,
    };
  }

  return state;
};

const store = createStore(salesReducer);

export default store;
