import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addNewComment = createAsyncThunk(
  "comments/addNewComment",
  async (initialComment) => {
    const response = await axios.post(`/api/v1/comments`, {
      comment: initialComment,
    });
    return response.data;
  }
);

export const fetchAlbumComments = createAsyncThunk(
  "comments/fetchAlbumComments",
  async (albumId) => {
    const response = await axios.get(`/api/v1/albums/${albumId}/comments`);
    return response.data;
  }
);

export const fetchArtistComments = createAsyncThunk(
  "comments/fetchArtistComments",
  async (artistId) => {
    const response = await axios.get(`/api/v1/artists/${artistId}/comments`);
    return response.data;
  }
);

export const fetchSongComments = createAsyncThunk(
  "comments/fetchSongComments",
  async (songId) => {
    const response = await axios.get(`/api/v1/songs/${songId}/comments`);
    return response.data;
  }
);

export const fetchVerseComments = createAsyncThunk(
  "comments/fetchVerseComments",
  async (verseId) => {
    const response = await axios.get(`/api/v1/verses/${verseId}/comments`);
    return response.data;
  }
);

export const addAlbumComment = createAsyncThunk(
  "comments/addAlbumComment",
  async (newComment) => {
    const response = await axios.post(
      `/api/v1/albums/${newComment.commentable_id}/comments`,
      {
        comment: newComment,
      }
    );
    return response.data;
  }
);

export const addArtistComment = createAsyncThunk(
  "comments/addArtistComment",
  async (newComment) => {
    const response = await axios.post(
      `/api/v1/artists/${newComment.commentable_id}/comments`,
      {
        comment: newComment,
      }
    );
    return response.data;
  }
);

export const addSongComment = createAsyncThunk(
  "comments/addSongComment",
  async (newComment) => {
    const response = await axios.post(
      `/api/v1/songs/${newComment.commentable_id}/comments`,
      {
        comment: newComment,
      }
    );
    return response.data;
  }
);

export const addVerseComment = createAsyncThunk(
  "comments/addVerseComment",
  async (newComment) => {
    const response = await axios.post(
      `/api/v1/verses/${newComment.commentable_id}/comments`,
      {
        comment: newComment,
      }
    );
    return response.data;
  }
);

// export const fetchAllComments = createAsyncThunk(
//   "comments/fetchAllComments",
//   async () => {
//     const response = await axios.get(`/api/v1/comments`);
//     return response.data;
//   }
// );

// export const fetchOneComment = createAsyncThunk('comments/fetchOneComment',
//   async (commentId) => {
//   }
// );

// export const addNewComment = createAsyncThunk('comments/addNewComment',
//   async (initialComment) => {}
// );

// export const editComment = createAsyncThunk("comments/editComment",
//   async () => {}
// );

// export const deleteComment = createAsyncThunk('comments/deleteComment');
