from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.exceptions import AuthenticationFailed
from rest_framework_simplejwt.tokens import RefreshToken

def get_tokens_for_user(user):
    if not user.is_active:
      raise AuthenticationFailed("User is not active")

    refresh = RefreshToken.for_user(user)

    return {
        'refresh_token': str(refresh),
        'access_token': str(refresh.access_token),
    }

def delete_token_for_user(refresh_token):
  try:
    token = RefreshToken(refresh_token)
    token.blacklist()
    return "User logout Successfully"
  except Exception as e:
     return {"token_error":str(e)}