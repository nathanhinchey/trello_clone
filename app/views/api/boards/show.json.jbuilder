# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list

json.title @board.title
json.lists do
  @board.lists.each do |list|
    json.list list.title
    json.cards list.cards
  end
end
