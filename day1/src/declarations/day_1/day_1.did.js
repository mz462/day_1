export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'add' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Nat], []),
    'clearCounter' : IDL.Func([], [IDL.Nat], []),
    'days_to_second' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'divide' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Bool], []),
    'increment_counter' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'is_even' : IDL.Func([IDL.Nat], [IDL.Bool], []),
    'max' : IDL.Func([IDL.Vec(IDL.Nat)], [IDL.Nat], []),
    'min' : IDL.Func([IDL.Vec(IDL.Nat)], [IDL.Nat], []),
    'remove_from_array' : IDL.Func(
        [IDL.Vec(IDL.Nat), IDL.Nat],
        [IDL.Vec(IDL.Nat)],
        [],
      ),
    'selection_sort_1' : IDL.Func([IDL.Vec(IDL.Nat)], [IDL.Vec(IDL.Nat)], []),
    'show_counter' : IDL.Func([], [IDL.Nat], []),
    'square' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Nat], []),
    'sum_of_array' : IDL.Func([IDL.Vec(IDL.Nat)], [IDL.Nat], []),
  });
};
export const init = ({ IDL }) => { return []; };
