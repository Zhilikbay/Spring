def monkey_trouble(a_smile, b_smile):
  if a_smile and b_smile:
    return True
  if not a_smile and not b_smile:
    return True
  return False

print(monkey_trouble(True, True))
monkey_trouble(False, False)
monkey_trouble(True, False)
