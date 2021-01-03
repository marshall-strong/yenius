# returns array elements as a string of comma separated values
# Uses ampersand between second-to-last and last elements, no Oxford commas
# [a] --> "a"
# [a, b] --> "a & b"
# [a, b, c] --> "a, b & c"

# INPUTS:
# array to transform
# ex: arr = self.featured_artists
# proc describing what to do to each array element
# ex: prc = Proc.new { |ele| ele.name }
# what to return if array is empty (length equals 0)
# ex: empty = "ERROR: no featured_artists"

def array_to_list(arr, prc = Proc.new { |ele| ele }, empty = nil)
  case arr.length
  when 0
    empty
  when 1
    prc.call(arr[0])
  when 2
    prc.call(arr[0]) + " & " + prc.call(arr[-1])
  else
    str = prc.call(arr[0])
    for i in 1 ... arr.length - 1
      str = str + ", " + prc.call(arr[i])
    end
    str = str + " & " + prc.call(arr[-1])
  end
end