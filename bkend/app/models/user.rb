class User < ApplicationRecord
	enum role: [:ADMIN, :USER]
	def as_json(options={})
		options[:except] ||= [:password]
		super(options)
	end
end
