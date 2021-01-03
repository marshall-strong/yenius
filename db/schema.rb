# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_16_222626) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "albums", force: :cascade do |t|
    t.string "name", null: false
    t.date "release_date"
    t.string "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_albums_on_name", unique: true
  end

  create_table "annotations", force: :cascade do |t|
    t.integer "annotating_user_id", null: false
    t.string "annotatable_type", null: false
    t.bigint "annotatable_id", null: false
    t.boolean "is_current", default: false, null: false
    t.string "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["annotatable_type", "annotatable_id"], name: "index_annotations_on_annotatable_type_and_annotatable_id"
    t.index ["annotating_user_id"], name: "index_annotations_on_annotating_user_id"
  end

  create_table "artist_credit_types", force: :cascade do |t|
    t.string "credit_type", null: false
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["credit_type"], name: "index_artist_credit_types_on_credit_type", unique: true
  end

  create_table "artist_credits", force: :cascade do |t|
    t.integer "artist_id"
    t.string "creditable_type"
    t.bigint "creditable_id"
    t.integer "artist_credit_type_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_credit_type_id"], name: "index_artist_credits_on_artist_credit_type_id"
    t.index ["artist_id"], name: "index_artist_credits_on_artist_id"
    t.index ["creditable_type", "creditable_id"], name: "index_artist_credits_on_creditable_type_and_creditable_id"
  end

  create_table "artists", force: :cascade do |t|
    t.string "name", null: false
    t.string "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_artists_on_name", unique: true
  end

  create_table "comments", force: :cascade do |t|
    t.integer "commenting_user_id", null: false
    t.string "commentable_type", null: false
    t.bigint "commentable_id", null: false
    t.string "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["commentable_type", "commentable_id"], name: "index_comments_on_commentable_type_and_commentable_id"
    t.index ["commenting_user_id"], name: "index_comments_on_commenting_user_id"
  end

  create_table "sample_credit_types", force: :cascade do |t|
    t.string "credit_type", null: false
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["credit_type"], name: "index_sample_credit_types_on_credit_type", unique: true
  end

  create_table "sample_credits", force: :cascade do |t|
    t.integer "parent_song_id"
    t.integer "child_song_id"
    t.integer "sample_credit_type_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["child_song_id"], name: "index_sample_credits_on_child_song_id"
    t.index ["parent_song_id"], name: "index_sample_credits_on_parent_song_id"
    t.index ["sample_credit_type_id"], name: "index_sample_credits_on_sample_credit_type_id"
  end

  create_table "songs", force: :cascade do |t|
    t.string "name", null: false
    t.integer "track_number"
    t.integer "album_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["album_id"], name: "index_songs_on_album_id"
    t.index ["name"], name: "index_songs_on_name"
  end

  create_table "upvotes", force: :cascade do |t|
    t.integer "upvoting_user_id", null: false
    t.string "upvotable_type", null: false
    t.bigint "upvotable_id", null: false
    t.boolean "is_downvote", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["upvotable_type", "upvotable_id"], name: "index_upvotes_on_upvotable_type_and_upvotable_id"
    t.index ["upvoting_user_id"], name: "index_upvotes_on_upvoting_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  create_table "verses", force: :cascade do |t|
    t.integer "song_id", null: false
    t.integer "verse_number", null: false
    t.string "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["song_id"], name: "index_verses_on_song_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
