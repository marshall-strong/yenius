# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }

    # after_initialize allows us to run methods before running validations
    # In this case, we need to have a session_token when a user is first created
    after_initialize :ensure_session_token

    has_many :authored_comments,
        class_name: :Comment, foreign_key: :commenting_user_id
    has_many :authored_upvotes,
        class_name: :Upvote, foreign_key: :upvoting_user_id





    # Class method for finding a user ONLY if we have the correct username and password
    def self.find_by_credentials(username, password_entered)
        user = User.find_by(username: username)
        return nil if user.nil?

        if user.is_password?(password_entered)
            return user
        else
            return nil
        end
    end

    # User instance methods
    # This makes it so we can validate our password length, without storing it in the DB
    def password
        @password
    end

    def password=(new_password)
        # Sets a temporary instance variable so that we can validate length
        @password = new_password
        # Creates a password_digest so that we do not have to store the plain-text password in our DB
        self.password_digest = BCrypt::Password.create(new_password)
    end

    def is_password?(password_entered)
        str_password_digest = self.password_digest
        bcrypt_password_digest = BCrypt::Password.new(str_password_digest)
        # Use BCrypt's built-in is_password? method for checking if the password entered is the user's password
        bcrypt_password_digest.is_password?(password_entered)
    end

    def reset_session_token!
        # When a user logs out, we want to scramble their session_token so that bad people cannot use the old one
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        # Generates the initial session_token so that we pass the validation
        # This method runs right after the model is initialized, before any validations are run
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end
end
