(ns todo-test.middleware
  (:require [ring.middleware.defaults :refer [api-defaults wrap-defaults]]
            [ring.middleware.format :refer [wrap-restful-format]]
            [ring.middleware.reload :refer [wrap-reload]]))

(defn wrap-middleware [handler]
  (-> handler
      (wrap-defaults api-defaults)
      (wrap-restful-format :formats [:json-kw :edn :transit-json :transit-msgpack])
      wrap-reload))
