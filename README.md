# CastThroughTime
A website dedicated to helping Magic players get back up to speed after leaving the game.
The live page can be found [here](https://www.castthroughtime.com)

## Table of Contents
1. [Background](https://www.github.com/Asylumrunner/CastThroughTime#background)
2. [Design Philosophy](https://www.github.com/Asylumrunner/CastThroughTime#design-philosophy)
3. [Tech Stack](https://www.github.com/Asylumrunner/CastThroughTime#tech-stack)
4. [Acknowledgements](https://github.com/Asylumrunner/CastThroughTime#acknolwedgements)

## Background
_[Magic: the Gathering](https://en.wikipedia.org/wiki/Magic:_The_Gathering)_ is a trading card game designed by Richard Garfield and which has seen regular casual and competitive play since its creation in 1993. In the game, players (given the title of "Planeswalkers") take on the role of powerful spellcasters, attempting to defeat one another by summoning powerful creatures, casting spells, wielding enchanted artifacts, and other general nerd stuff. Players assemble their own deck of cards in advance according to the rules of the "format" being played (think NFL vs. XFL vs. Aussie rules football. Same game, different tweaks on the edges) and using 30+ years' of printed cards.

Unlike many particularly long-lasting tabletop games, such as chess, the rules of _Magic_ are in a continual and rapid state of flux. The total pool of printed cards increases every year (and the amount by which it increases _also_ increases every year) with the release of between 4 and 8 sets of new cards every year, and with those new cards come new rules to the game and changes to existing rules. _Magic_'s particularly long lifespan also means it is common for players to take extended breaks from playing, often times for years and sometimes for over a decade (I myself took such a break, between 2014 and 2022).

These two factors combined mean that a player returning to the game of _Magic_ after an extended period of time cannot just jump right back into play, as they will have missed years of rules changes and important set releases which have fundamentally changed how the game is played. Imagine stepping away from football for ten years, only to come back and discover in your first game in a decade that now both teams have possession simultaneously, they've introduced three new positions to the game, and for some reason the quarterback now has a gun. These sorts of rules changes make the game difficult to return to, and moreover most learning aids which exist for _Magic_ presuppose a player learning the game from scratch, repeating a lot of information that a returning player will already be familiar with, when really they just need to know the delta.

_Cast Through Time_ is my attempt to create the kind of learning resource I searched for when I returned to the game. It is a single-page web application in which a returning _Magic_ player can simply input when the last time they kept up with _Magic_ was, and they will be provided with short, itemized explanations of the major rules changes that have occured in their absence. With this information, a returning player to the game should feel comfortable enough with the current state of the game that they should be able to hop into the game confident that they have solid footing with which to reenter the game.

## Design Philosophy
Designing a useful learning aid like this requires slightly more nuance than simply regurgitating all of the times the rules of _Magic_ have changed since X date.

For one thing, there is simply a _colossal_ amount of change which occurs to the rules of _Magic_ year after year, and not all of it is of equal relevance. _Magic_, as is the case with most card games that have come out in its wake, has an extremely modular design, such that most of the game's meaningful rules content is printed on the cards themselves and are mechanically irrelevant until a card invoking that rule has been played. Many of these rules are encapsulated into one- or two-word _keywords_ (for example, the keyword "Lifelink" indicates that whenever one of a player's summoned creatures with lifelink deals damage, its controller gains that many life points). Some keywords are ubiquitous, sure to pop up in many if not most games of _Magic_, whereas others represent a sort of lingering ephemera of the game, printed on a handful of cards that no one really uses anymore from decades ago. Each set of cards usually has a half-dozen or so of these keywords, and with 4-8 sets coming out every year and sometimes as many of ten years of sets missed by players returning to _Magic_, attempting to teach each and every one of these new keywords to a returning player would constitute an absolute flood of information of extremely variable usefulness. So, some curation is required.

The other big catch to a project such as this one is that several very core rules to the game have gone through multiple iterations through the game's lifetime, meaning that a catch-up isn't simply a matter of "do you know about this thing or not", but instead is "what was the state of this rule when you were gone, and what's changed since then".

As an example, take the "Legend" rule. _Magic_ denotes its most iconic and powerful cards with the "Legendary" supertype, which since its introduction to the game has always had an associated rule which ensures that Legendary cards in play possess some degree of uniqueness (always some variety of "only one of these cards can be in play at a time", with varying degrees of strictness). Depending on when a player last played _Magic_, Legendary cards might be a completely new concept to them, or they might be familiar with one of the _three_ "Legend rules" that have been a part of the game's rules at one point or another. A maximally efficient, maximally personalized rules refresher would take that into account, and only provide the information to bridge the difference between the player's previous understanding and the current rule.

## Tech Stack
_Cast Through Time_ was developed in part as a personal project to brush up on React, and as such the front-end is built in React, using Redux as a state manager. The front-end communicates with a simple backend API using RTK Query to manage requests. [That backend](https://github.com/Asylumrunner/CastThroughTimeBackend), written in Python using Flask and deployed to AWS Lambda using [Zappa](https://github.com/zappa/Zappa), has two major endpoints: one of which returns all of the information about rules changes, and the other of which returns a list of all of the released sets of _Magic: the Gathering_ cards (this endpoint in turn calls a public API provided by _Magic_ information collator [Scryfall](https://www.scryfall.com), as any locally-stored list of them would become outdated in a matter of a month or two). This API also compares the list of sets pulled down from Scryfall with a list of set symbols (the icons used to represent each set) stored in an Amazon S3 bucket, and downloads any missing symbols for new sets to the bucket.

With the list of sets, the S3 bucket of set symbols, and the full collection of rules data, the site can then render a "set selector" which allows a user to easily select which set they stopped playing _Magic_ during, and with that information the page renders out a list of all crucial, relevant information that the returning player needs to get back into the game.

The front-end is deployed to AWS via AWS Amplify.

## Acknolwedgements
Portions of _Cast Through Time_ are unofficial Fan Content permitted under the Wizards of the Coast Fan Content Policy. The literal and graphical information presented on this site about Magic: The Gathering, including card images and mana symbols, is copyright Wizards of the Coast, LLC. _Cast Through Time_ is not produced by or endorsed by Wizards of the Coast.

The fonts utilized by _Cast Through Time_ are PT Serif and Roboto Slab, both courtesy Google Fonts.

This application makes use of the [Scryfall Public API](https://scryfall.com/docs/api).

