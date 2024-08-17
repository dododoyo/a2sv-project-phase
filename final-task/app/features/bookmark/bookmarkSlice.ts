import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Bookmark, defaultBookmarkValue } from "@/types";

const initialState: defaultBookmarkValue = {
  value: [],
};

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addBookmark(state, action: PayloadAction<Bookmark>) {
      state.value.push(action.payload);
    },
    updateBookmarks(state, action: PayloadAction<Bookmark[]>) {
      state.value = action.payload;
    },
    removeBookmark(state, action: PayloadAction<Bookmark>) {
      state.value.filter(
        (bookmark) => bookmark.eventID !== action.payload.eventID
      );
    },
    updateDateBookmarked(
      state,
      action: PayloadAction<{ index: number; dateBookmarked: string }>
    ) {
      const { index, dateBookmarked } = action.payload;
      if (state.value[index]) {
        state.value[index].dateBookmarked = dateBookmarked;
      }
    },
    updateDatePosted(
      state,
      action: PayloadAction<{ index: number; datePosted: string }>
    ) {
      const { index, datePosted } = action.payload;
      if (state.value[index]) {
        state.value[index].datePosted = datePosted;
      }
    },
    updateEventID(
      state,
      action: PayloadAction<{ index: number; eventID: string }>
    ) {
      const { index, eventID } = action.payload;
      if (state.value[index]) {
        state.value[index].eventID = eventID;
      }
    },
    updateLocation(
      state,
      action: PayloadAction<{ index: number; location: string }>
    ) {
      const { index, location } = action.payload;
      if (state.value[index]) {
        state.value[index].location = location;
      }
    },
    updateLogoUrl(
      state,
      action: PayloadAction<{ index: number; logoUrl: string }>
    ) {
      const { index, logoUrl } = action.payload;
      if (state.value[index]) {
        state.value[index].logoUrl = logoUrl;
      }
    },
    updateOpType(
      state,
      action: PayloadAction<{ index: number; opType: "inPerson" | "virtual" }>
    ) {
      const { index, opType } = action.payload;
      if (state.value[index]) {
        state.value[index].opType = opType;
      }
    },
    updateOrgName(
      state,
      action: PayloadAction<{ index: number; orgName: string }>
    ) {
      const { index, orgName } = action.payload;
      if (state.value[index]) {
        state.value[index].orgName = orgName;
      }
    },
    updateTitle(
      state,
      action: PayloadAction<{ index: number; title: string }>
    ) {
      const { index, title } = action.payload;
      if (state.value[index]) {
        state.value[index].title = title;
      }
    },
  },
});

export const {
  updateBookmarks,
  addBookmark,
  removeBookmark,
  updateDateBookmarked,
  updateDatePosted,
  updateEventID,
  updateLocation,
  updateLogoUrl,
  updateOpType,
  updateOrgName,
  updateTitle,
} = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
