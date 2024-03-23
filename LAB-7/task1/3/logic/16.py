def make_chocolate(small, big, goal):
    max_big_bars = goal // 5
    if max_big_bars >= big:
        big_bars_needed = big
    else:
        big_bars_needed = max_big_bars
    
    remaining_weight = goal - (big_bars_needed * 5)
    
    if remaining_weight <= small:
        return remaining_weight
    else:
        return -1
