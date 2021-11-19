# /books

---

returns all books

## Sub routes off of `/books`:

-   # /books/count:

    returns the total count of the available books.

    example:

    /books/count

    > returns books count

-   # /books/categories:

    returns all the categories IDs, using them you can query all books from a specific category.

    example:

    /categories

    > returns an array of all categories IDs

-   # /books/list:

    returns all the IDs and their books names, this returns an array of objects, each of which contains a book's name and its ID.

    example:

    /books/keys

    > returns an array of objects consisting of {\_id: SOME_ID, name: SOME_NAME}

-   # /books/quote:

    returns a random quote from a random book.

    example:

    /books/quote

    > returns a random quote from a random book, alongside the parent name and ID and other information

    -   notes:

        -   You can also get quotes from a specific book by either providing its name or ID in your query `id=SOME_ID` or `name=SOME_NAME`, this would return a random quote from this specific book.

        example:

        /books/quote?name=أكل عيش

        > returns a random quote from the book called "أكل عيش"

        -   By default, a single random quote is returned, if you want to return all quotes from a specific book, you can append `all=true` to your query. To get a one random quote on each request, omit `all=true`.

        example:

        /books/quote?name=أكل عيش

        > returns ALL quotes from the book called "أكل عيش"

---

## Ways to query `/books`:

1. #### Limit the returned results:

-   You can limit the returned amount by using `?limit=NUMBER`, the number can be any value within the total count of the books which is 81 at the time of writing.

    example:

    /books?limit=10

    > returns 10 books

    -   notes:
        -   querying to limit using a number that is above the maximum amount of books available will return all available books (its the same as doing `?limit=81` or not limiting at all).
        -   querying to limit using a number that is below the minimum amount of books available (such as 0) will return all available books (its the same as doing `?limit=81` or not limiting at all).
        *   querying to limit using a negative number will be treated as a positive number. (`?limit=-15` is the same as doing `?limit=15`). You shouldn't do this but just so you are aware of it.

2. #### Query by category:

-   You can query a specific category (categories and subjects are the same but you can only query using the category ID, you can't query using subject field) using category ids (see /categories) and the returned result will be books off that category only.

    example:

    /books?category=19

    > returns books from that category

    -   notes:

        -   You can also limit the amount of books off a category by appending the `limit=NUMBER` to your query (see above).

            example:
            /books/?category=19&limit=2

            > returns two books off category 19.

3. #### Query by publishing year:

-   You can query books that were published in a certain year.

    example:

    /books?year=1984

    > returns all books that were published in that year

    -   notes:

        -   You can also limit the amount of books sent back by appending the `limit=NUMBER` to your query

        example:

        /books?lt=1984&limit=2

        > returns all books that were published before the year 1974 and limits the results to 5 books only

4. #### Query for books published before/after a certain year:

-   You can query books that were published after a certain year or before.

    example:

    /books?gt=2000

    > returns all books that were published in or after the year 2000

    example 2:

    /books?lt=1974

    > returns all books that were published in or after the year 1974

    -   notes:

        -   You can also limit the amount of books sent back by appending the `limit=NUMBER` to your query

        example:

        /books?lt=1974&limit=5

        > returns all books that were published before the year 1974 and limits the results to 5 books only

5. #### Query by the book's name:

-   You can query for a specific book using its name. However, the name has to exactly matched so it's better to use the ID of the book over this method, but you can still do it this way too.

    example:

    /books?name=عنبر سبعة

    > returns the matching book.

6. #### Query by the book's ID:

-   You can query for a specific book using its unique ID. This is the best way to get the right book, querying by name can be problematic due to how different and strict the Arabic language is.

    example:

    /books?id=619661d37d1938daea59a2ef

    > returns the matching book.

    Where to find all the IDs? see sub-route: `list`
