// sauce
// https://gist.github.com/Nordaj/cc6cadcbee1019a3299939d0f1b86296

export enum RawKeys {
  LeftMouseBtn = 0x01, //Left mouse button
  RightMouseBtn = 0x02, //Right mouse button
  CtrlBrkPrcs = 0x03, //Control-break processing
  MidMouseBtn = 0x04, //Middle mouse button

  ThumbForward = 0x05, //Thumb button back on mouse aka X1
  ThumbBack = 0x06, //Thumb button forward on mouse aka X2

  //0x07 : reserved

  BackSpace = 0x08, //Backspace key
  Tab = 0x09, //Tab key

  //0x0A - 0x0B : reserved

  Clear = 0x0c, //Clear key
  Enter = 0x0d, //Enter or Return key

  //0x0E - 0x0F : unassigned

  Shift = 0x10, //Shift key
  Control = 0x11, //Ctrl key
  Alt = 0x12, //Alt key
  Pause = 0x13, //Pause key
  CapsLock = 0x14, //Caps lock key

  Kana = 0x15, //Kana input mode
  Hangeul = 0x15, //Hangeul input mode
  Hangul = 0x15, //Hangul input mode

  //0x16 : unassigned

  Junju = 0x17, //Junja input method
  Final = 0x18, //Final input method
  Hanja = 0x19, //Hanja input method
  Kanji = 0x19, //Kanji input method

  //0x1A : unassigned

  Escape = 0x1b, //Esc key

  Convert = 0x1c, //IME convert
  NonConvert = 0x1d, //IME Non convert
  Accept = 0x1e, //IME accept
  ModeChange = 0x1f, //IME mode change

  Space = 0x20, //Space bar
  PageUp = 0x21, //Page up key
  PageDown = 0x22, //Page down key
  End = 0x23, //End key
  Home = 0x24, //Home key
  LeftArrow = 0x25, //Left arrow key
  UpArrow = 0x26, //Up arrow key
  RightArrow = 0x27, //Right arrow key
  DownArrow = 0x28, //Down arrow key
  Select = 0x29, //Select key
  Print = 0x2a, //Print key
  Execute = 0x2b, //Execute key
  PrintScreen = 0x2c, //Print screen key
  Inser = 0x2d, //Insert key
  Delete = 0x2e, //Delete key
  Help = 0x2f, //Help key

  Num0 = 0x30, //Top row 0 key (Matches '0')
  Num1 = 0x31, //Top row 1 key (Matches '1')
  Num2 = 0x32, //Top row 2 key (Matches '2')
  Num3 = 0x33, //Top row 3 key (Matches '3')
  Num4 = 0x34, //Top row 4 key (Matches '4')
  Num5 = 0x35, //Top row 5 key (Matches '5')
  Num6 = 0x36, //Top row 6 key (Matches '6')
  Num7 = 0x37, //Top row 7 key (Matches '7')
  Num8 = 0x38, //Top row 8 key (Matches '8')
  Num9 = 0x39, //Top row 9 key (Matches '9')

  //0x3A - 0x40 : unassigned

  A = 0x41, //A key (Matches 'A')
  B = 0x42, //B key (Matches 'B')
  C = 0x43, //C key (Matches 'C')
  D = 0x44, //D key (Matches 'D')
  E = 0x45, //E key (Matches 'E')
  F = 0x46, //F key (Matches 'F')
  G = 0x47, //G key (Matches 'G')
  H = 0x48, //H key (Matches 'H')
  I = 0x49, //I key (Matches 'I')
  J = 0x4a, //J key (Matches 'J')
  K = 0x4b, //K key (Matches 'K')
  L = 0x4c, //L key (Matches 'L')
  M = 0x4d, //M key (Matches 'M')
  N = 0x4e, //N key (Matches 'N')
  O = 0x4f, //O key (Matches 'O')
  P = 0x50, //P key (Matches 'P')
  Q = 0x51, //Q key (Matches 'Q')
  R = 0x52, //R key (Matches 'R')
  S = 0x53, //S key (Matches 'S')
  T = 0x54, //T key (Matches 'T')
  U = 0x55, //U key (Matches 'U')
  V = 0x56, //V key (Matches 'V')
  W = 0x57, //W key (Matches 'W')
  X = 0x58, //X key (Matches 'X')
  Y = 0x59, //Y key (Matches 'Y')
  Z = 0x5a, //Z key (Matches 'Z')

  LeftWin = 0x5b, //Left windows key
  RightWin = 0x5c, //Right windows key
  Apps = 0x5d, //Applications key

  //0x5E : reserved

  Sleep = 0x5f, //Computer sleep key

  Numpad0 = 0x60, //Numpad 0
  Numpad1 = 0x61, //Numpad 1
  Numpad2 = 0x62, //Numpad 2
  Numpad3 = 0x63, //Numpad 3
  Numpad4 = 0x64, //Numpad 4
  Numpad5 = 0x65, //Numpad 5
  Numpad6 = 0x66, //Numpad 6
  Numpad7 = 0x67, //Numpad 7
  Numpad8 = 0x68, //Numpad 8
  Numpad9 = 0x69, //Numpad 9
  Multiply = 0x6a, //Multiply key
  Add = 0x6b, //Add key
  Separator = 0x6c, //Separator key
  Subtract = 0x6d, //Subtract key
  Decimal = 0x6e, //Decimal key
  Divide = 0x6f, //Divide key
  F1 = 0x70, //F1
  F2 = 0x71, //F2
  F3 = 0x72, //F3
  F4 = 0x73, //F4
  F5 = 0x74, //F5
  F6 = 0x75, //F6
  F7 = 0x76, //F7
  F8 = 0x77, //F8
  F9 = 0x78, //F9
  F10 = 0x79, //F10
  F11 = 0x7a, //F11
  F12 = 0x7b, //F12
  F13 = 0x7c, //F13
  F14 = 0x7d, //F14
  F15 = 0x7e, //F15
  F16 = 0x7f, //F16
  F17 = 0x80, //F17
  F18 = 0x81, //F18
  F19 = 0x82, //F19
  F20 = 0x83, //F20
  F21 = 0x84, //F21
  F22 = 0x85, //F22
  F23 = 0x86, //F23
  F24 = 0x87, //F24

  //0x88 - 0x8F : UI navigation

  NavigationView = 0x88, //reserved
  NavigationMenu = 0x89, //reserved
  NavigationUp = 0x8a, //reserved
  NavigationDown = 0x8b, //reserved
  NavigationLeft = 0x8c, //reserved
  NavigationRight = 0x8d, //reserved
  NavigationAccept = 0x8e, //reserved
  NavigationCancel = 0x8f, //reserved

  NumLock = 0x90, //Num lock key
  ScrollLock = 0x91, //Scroll lock key

  NumpadEqual = 0x92, //Numpad =

  FJ_Jisho = 0x92, //Dictionary key
  FJ_Masshou = 0x93, //Unregister word key
  FJ_Touroku = 0x94, //Register word key
  FJ_Loya = 0x95, //Left OYAYUBI key
  FJ_Roya = 0x96, //Right OYAYUBI key

  //0x97 - 0x9F : unassigned

  LeftShift = 0xa0, //Left shift key
  RightShift = 0xa1, //Right shift key
  LeftCtrl = 0xa2, //Left control key
  RightCtrl = 0xa3, //Right control key
  LeftMenu = 0xa4, //Left menu key
  RightMenu = 0xa5, //Right menu

  BrowserBack = 0xa6, //Browser back button
  BrowserForward = 0xa7, //Browser forward button
  BrowserRefresh = 0xa8, //Browser refresh button
  BrowserStop = 0xa9, //Browser stop button
  BrowserSearch = 0xaa, //Browser search button
  BrowserFavorites = 0xab, //Browser favorites button
  BrowserHome = 0xac, //Browser home button

  VolumeMute = 0xad, //Volume mute button
  VolumeDown = 0xae, //Volume down button
  VolumeUp = 0xaf, //Volume up button
  NextTrack = 0xb0, //Next track media button
  PrevTrack = 0xb1, //Previous track media button
  Stop = 0xb2, //Stop media button
  PlayPause = 0xb3, //Play/pause media button
  Mail = 0xb4, //Launch mail button
  MediaSelect = 0xb5, //Launch media select button
  App1 = 0xb6, //Launch app 1 button
  App2 = 0xb7, //Launch app 2 button

  //0xB8 - 0xB9 : reserved

  OEM1 = 0xba, //;: key for US or misc keys for others
  Plus = 0xbb, //Plus key
  Comma = 0xbc, //Comma key
  Minus = 0xbd, //Minus key
  Period = 0xbe, //Period key
  OEM2 = 0xbf, //? for US or misc keys for others
  OEM3 = 0xc0, //~ for US or misc keys for others

  //0xC1 - 0xC2 : reserved

  Gamepad_A = 0xc3, //Gamepad A button
  Gamepad_B = 0xc4, //Gamepad B button
  Gamepad_X = 0xc5, //Gamepad X button
  Gamepad_Y = 0xc6, //Gamepad Y button
  GamepadRightBumper = 0xc7, //Gamepad right bumper
  GamepadLeftBumper = 0xc8, //Gamepad left bumper
  GamepadLeftTrigger = 0xc9, //Gamepad left trigger
  GamepadRightTrigger = 0xca, //Gamepad right trigger
  GamepadDPadUp = 0xcb, //Gamepad DPad up
  GamepadDPadDown = 0xcc, //Gamepad DPad down
  GamepadDPadLeft = 0xcd, //Gamepad DPad left
  GamepadDPadRight = 0xce, //Gamepad DPad right
  GamepadMenu = 0xcf, //Gamepad menu button
  GamepadView = 0xd0, //Gamepad view button
  GamepadLeftStickBtn = 0xd1, //Gamepad left stick button
  GamepadRightStickBtn = 0xd2, //Gamepad right stick button
  GamepadLeftStickUp = 0xd3, //Gamepad left stick up
  GamepadLeftStickDown = 0xd4, //Gamepad left stick down
  GamepadLeftStickRight = 0xd5, //Gamepad left stick right
  GamepadLeftStickLeft = 0xd6, //Gamepad left stick left
  GamepadRightStickUp = 0xd7, //Gamepad right stick up
  GamepadRightStickDown = 0xd8, //Gamepad right stick down
  GamepadRightStickRight = 0xd9, //Gamepad right stick right
  GamepadRightStickLeft = 0xda, //Gamepad right stick left

  OEM4 = 0xdb, //[ for US or misc keys for others
  OEM5 = 0xdc, //\ for US or misc keys for others
  OEM6 = 0xdd, //] for US or misc keys for others
  OEM7 = 0xde, //' for US or misc keys for others
  OEM8 = 0xdf, //Misc keys for others

  //0xE0 : reserved

  OEMAX = 0xe1, //AX key on Japanese AX keyboard
  OEM102 = 0xe2, //"<>" or "\|" on RT 102-key keyboard
  ICOHelp = 0xe3, //Help key on ICO
  ICO00 = 0xe4, //00 key on ICO

  ProcessKey = 0xe5, //Process key input method
  OEMCLEAR = 0xe6, //OEM specific
  Packet = 0xe7, //IDK man try to google it

  //0xE8 : unassigned

  OEMReset = 0xe9, //OEM reset button
  OEMJump = 0xea, //OEM jump button
  OEMPA1 = 0xeb, //OEM PA1 button
  OEMPA2 = 0xec, //OEM PA2 button
  OEMPA3 = 0xed, //OEM PA3 button
  OEMWSCtrl = 0xee, //OEM WS Control button
  OEMCusel = 0xef, //OEM CUSEL button
  OEMAttn = 0xf0, //OEM ATTN button
  OEMFinish = 0xf1, //OEM finish button
  OEMCopy = 0xf2, //OEM copy button
  OEMAuto = 0xf3, //OEM auto button
  OEMEnlw = 0xf4, //OEM ENLW
  OEMBackTab = 0xf5, //OEM back tab

  Attn = 0xf6, //Attn
  CrSel = 0xf7, //CrSel
  ExSel = 0xf8, //ExSel
  EraseEOF = 0xf9, //Erase EOF key
  Play = 0xfa, //Play key
  Zoom = 0xfb, //Zoom key
  NoName = 0xfc, //No name
  PA1 = 0xfd, //PA1 key
  OEMClear = 0xfe, //OEM Clear key
}
