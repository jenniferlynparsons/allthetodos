Implement a TODO app in Clojure/ClojureScript. The basic architecture is: the backend is Clojure and should handle any state storage (CRUD operations). The front-end is responsible for rendering--that is, we expect you'll send data back and forth vs. rendered HTML to the browser (except for the initial page load which can be a static HTML file that runs the compiled CLJS code).

    The main page at the path "/" should contain the main TODO interface.
    There should be an "/about" page giving a description of the project.
    Per the architecture constraints, all rendering should happen on the client-side using a ClojureScript React wrapper library like Reagent, Rum, or any other of your choosing.
    A TODO consists of two values: completion state (a boolean value) and text description.
    Per the architecture constraints, TODO state should be stored on the backend.

Features

Remember: Fewer of these done well beats more of them done poorly.

    Add a new TODO (initially incomplete)
    Mark a TODO as completed
    Unmark a TODO as completed (i.e. return it to incomplete state)
    Delete existing TODOs


functionality/interface

blank input with blinking cursor and + button

clicking plus
- adds the todo to a list with a checkbox and text
- clears the input
- writes the item & status to crud


What's the util.cljc for?

miffy [4:17 PM]
It’s code that can be used in both ClojureScript and Clojure
It’s particularly useful if you have functions for constructing and processing data structures that get shared between both ends, for instance, validation code

[:div [:input {:placeholder "add a to do item"}]]


http://udayv.com/clojure/2014/08/19/json-web-services-with-clojure/

https://clojuredocs.org

Yea no just use an atom
Leave a note that says
"this should really be a database"

https://clojure.org/reference/atoms


http://stackoverflow.com/questions/22291076/using-swap-to-merge-append-to-a-nested-map-in-a-clojure-atom
Let's say I have an atom that contains a map like this:
{:count 0 :map hash-map}
How can I use swap to merge another key-value pair onto :map?
(swap! my-atom assoc-in [:map :new-key] value)


https://dhruvp.github.io/2015/02/23/mailchimip-clojure/

http://escherize.com/cljsfiddle/
