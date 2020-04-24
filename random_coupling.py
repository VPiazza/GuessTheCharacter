# Coupling randomly the participants#
import random

chooser = ["Valerio",
           "Giuliana",
           "Bernardo",
           "Gloria"]

chosen = ["Valerio",
           "Giuliana",
           "Bernardo",
           "Gloria"]


while len(chooser) > 1:
    a = random.randint(0,len(chooser)-1)
    b = random.randint(0,len(chosen)-1)

    if a == b:
        a = random.randint(0,len(chooser)-1)
        b = random.randint(0,len(chosen)-1)
    else:
        P1 = chooser[a]
        P2 = chosen[b]
        print(P1 + " chooses the character for " + P2 + ".\n")
        chooser.pop(a)
        chosen.pop(b)

print(chooser[0] + " chooses the character for " + chosen[0])


