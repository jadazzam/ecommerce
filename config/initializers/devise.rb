Devise.secret_key = "15f8d2d3361e2b3a71717709d5dcff9cc0009d65ed765846c1c4a6de99875dca8e50ffef889a6eb562d4117b16aecbfb921c"

Devise.setup do |config|
  # Required so users don't lose their carts when they need to confirm.
  config.allow_unconfirmed_access_for = 1.days

  # Add any other devise configurations here, as they will override the defaults provided by solidus_auth_devise.
end
