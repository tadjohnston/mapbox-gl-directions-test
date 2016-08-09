source_rubygems = 'https://rubygems.org'
source_idg = 'http://gems.idg.primedia.com'

source source_rubygems do
  gem 'rails', '4.2.1'
  gem 'sqlite3'
  gem 'sass-rails', '~> 5.0'
  gem 'uglifier', '>= 1.3.0'
  gem 'coffee-rails', '~> 4.1.0'
  gem 'jquery-rails'
  gem 'jbuilder', '~> 2.0'
  gem 'sdoc', '~> 0.4.0', group: :doc
  gem 'slim'
  gem 'unicorn'
end

source source_idg do
  gem 'asset_manifest_helper', '1.1.0'
end

group :development, :test do
  source source_rubygems do
    gem 'byebug'
    gem 'web-console', '~> 2.0'
    gem 'spring'
  end
end
