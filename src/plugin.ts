import streamDeck, { LogLevel } from "@elgato/streamdeck";

import { IncrementCounter } from "./actions/increment-counter";
import { FetchQuote } from "./actions/fetch-random-quote"

// We can enable "trace" logging so that all messages between the Stream Deck, and the plugin are recorded. When storing sensitive information
streamDeck.logger.setLevel(LogLevel.TRACE);

// Register the increment action.
streamDeck.actions.registerAction(new IncrementCounter());

//Register add by two Counter Action
streamDeck.actions.registerAction(new FetchQuote());

// Finally, connect to the Stream Deck.
streamDeck.connect();
