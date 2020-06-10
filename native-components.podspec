require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "native-components"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { :ios => "9.0" }
  s.source       = { :git => "https://github.com/MarcoMacedoP/NativeComponets.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m}"

  s.dependency "React"
end
