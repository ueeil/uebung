var RandomForestClassifier = function() {

    var findMax = function(nums) {
        var index = 0;
        for (var i = 0; i < nums.length; i++) {
            index = nums[i] > nums[index] ? i : index;
        }
        return index;
    };

    var trees = new Array();

    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[4] <= -0.05000000074505806) {
            if (features[8] <= -0.2019999958574772) {
                if (features[9] <= 0.25199999660253525) {
                    if (features[21] <= 1.449999988079071) {
                        classes[0] = 0; 
                        classes[1] = 173; 
                        classes[2] = 0; 
                    } else {
                        classes[0] = 3; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    }
                } else {
                    if (features[5] <= -89.10100251436234) {
                        classes[0] = 0; 
                        classes[1] = 35; 
                        classes[2] = 0; 
                    } else {
                        if (features[4] <= -100.25200271606445) {
                            classes[0] = 0; 
                            classes[1] = 15; 
                            classes[2] = 0; 
                        } else {
                            if (features[11] <= 2.3845037817955017) {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 48; 
                            } else {
                                classes[0] = 5; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                            }
                        }
                    }
                }
            } else {
                if (features[3] <= 144.68199157714844) {
                    if (features[6] <= -90.52499997615814) {
                        classes[0] = 0; 
                        classes[1] = 1; 
                        classes[2] = 0; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 196; 
                    }
                } else {
                    classes[0] = 0; 
                    classes[1] = 2; 
                    classes[2] = 0; 
                }
            }
        } else {
            if (features[20] <= -0.05000000074505806) {
                if (features[5] <= 148.70099639892578) {
                    if (features[0] <= 334.5500030517578) {
                        classes[0] = 255; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    } else {
                        if (features[11] <= 7.116469621658325) {
                            classes[0] = 107; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 3; 
                            classes[2] = 0; 
                        }
                    }
                } else {
                    classes[0] = 0; 
                    classes[1] = 1; 
                    classes[2] = 0; 
                }
            } else {
                if (features[7] <= 1.829522244632244) {
                    classes[0] = 0; 
                    classes[1] = 4; 
                    classes[2] = 0; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 0; 
                    classes[2] = 0; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[23] <= 0.0805751346051693) {
            if (features[1] <= 99.7504997253418) {
                classes[0] = 0; 
                classes[1] = 0; 
                classes[2] = 116; 
            } else {
                if (features[5] <= -89.10100251436234) {
                    classes[0] = 0; 
                    classes[1] = 218; 
                    classes[2] = 0; 
                } else {
                    if (features[9] <= 0.45000000298023224) {
                        if (features[7] <= 36.88591867685318) {
                            if (features[23] <= 0.033021087758243084) {
                                if (features[7] <= 0.025093866512179375) {
                                    classes[0] = 0; 
                                    classes[1] = 3; 
                                    classes[2] = 0; 
                                } else {
                                    classes[0] = 0; 
                                    classes[1] = 0; 
                                    classes[2] = 4; 
                                }
                            } else {
                                classes[0] = 6; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                            }
                        } else {
                            classes[0] = 0; 
                            classes[1] = 26; 
                            classes[2] = 0; 
                        }
                    } else {
                        if (features[10] <= 1.399999976158142) {
                            if (features[1] <= 359.5015106201172) {
                                if (features[4] <= 22.699999999254942) {
                                    if (features[15] <= 0.9833178520202637) {
                                        classes[0] = 0; 
                                        classes[1] = 0; 
                                        classes[2] = 107; 
                                    } else {
                                        if (features[13] <= 5.551999926567078) {
                                            classes[0] = 0; 
                                            classes[1] = 1; 
                                            classes[2] = 0; 
                                        } else {
                                            classes[0] = 0; 
                                            classes[1] = 0; 
                                            classes[2] = 3; 
                                        }
                                    }
                                } else {
                                    classes[0] = 2; 
                                    classes[1] = 0; 
                                    classes[2] = 0; 
                                }
                            } else {
                                if (features[20] <= -0.15000000223517418) {
                                    classes[0] = 0; 
                                    classes[1] = 4; 
                                    classes[2] = 0; 
                                } else {
                                    classes[0] = 0; 
                                    classes[1] = 0; 
                                    classes[2] = 4; 
                                }
                            }
                        } else {
                            classes[0] = 7; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        }
                    }
                }
            }
        } else {
            if (features[7] <= 84.6696367263794) {
                if (features[6] <= -88.29799997806549) {
                    classes[0] = 0; 
                    classes[1] = 8; 
                    classes[2] = 0; 
                } else {
                    if (features[6] <= 12.550749778747559) {
                        if (features[13] <= 0.15000000223517418) {
                            if (features[0] <= 173.15100306272507) {
                                classes[0] = 1; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                            } else {
                                classes[0] = 0; 
                                classes[1] = 2; 
                                classes[2] = 0; 
                            }
                        } else {
                            classes[0] = 41; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        }
                    } else {
                        classes[0] = 285; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    }
                }
            } else {
                classes[0] = 0; 
                classes[1] = 12; 
                classes[2] = 0; 
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[21] <= 0.25199999660253525) {
            if (features[1] <= 99.7504997253418) {
                if (features[8] <= 1.25) {
                    classes[0] = 0; 
                    classes[1] = 0; 
                    classes[2] = 102; 
                } else {
                    classes[0] = 3; 
                    classes[1] = 0; 
                    classes[2] = 0; 
                }
            } else {
                if (features[6] <= -89.84999692440033) {
                    classes[0] = 0; 
                    classes[1] = 234; 
                    classes[2] = 0; 
                } else {
                    if (features[5] <= 14.550000011920929) {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 116; 
                    } else {
                        if (features[7] <= 62.452239751815796) {
                            if (features[20] <= -0.05000000074505806) {
                                classes[0] = 40; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                            } else {
                                classes[0] = 0; 
                                classes[1] = 4; 
                                classes[2] = 0; 
                            }
                        } else {
                            classes[0] = 0; 
                            classes[1] = 6; 
                            classes[2] = 0; 
                        }
                    }
                }
            }
        } else {
            if (features[4] <= -97.90100288391113) {
                classes[0] = 0; 
                classes[1] = 15; 
                classes[2] = 0; 
            } else {
                if (features[3] <= 0.10006967931985855) {
                    if (features[10] <= -14.199499994516373) {
                        classes[0] = 0; 
                        classes[1] = 1; 
                        classes[2] = 0; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 1; 
                    }
                } else {
                    if (features[6] <= 147.8499984741211) {
                        classes[0] = 327; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 1; 
                        classes[2] = 0; 
                    }
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[20] <= -0.15000000223517418) {
            if (features[20] <= -0.25199999660253525) {
                if (features[6] <= -91.42625260353088) {
                    classes[0] = 0; 
                    classes[1] = 6; 
                    classes[2] = 0; 
                } else {
                    if (features[15] <= 0.048882436007261276) {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 3; 
                    } else {
                        if (features[4] <= -96.60000133514404) {
                            classes[0] = 0; 
                            classes[1] = 6; 
                            classes[2] = 0; 
                        } else {
                            if (features[2] <= 336.1024932861328) {
                                classes[0] = 214; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                            } else {
                                if (features[1] <= 346.1524963378906) {
                                    if (features[7] <= 1.9163526892662048) {
                                        classes[0] = 6; 
                                        classes[1] = 0; 
                                        classes[2] = 0; 
                                    } else {
                                        classes[0] = 0; 
                                        classes[1] = 3; 
                                        classes[2] = 0; 
                                    }
                                } else {
                                    classes[0] = 90; 
                                    classes[1] = 0; 
                                    classes[2] = 0; 
                                }
                            }
                        }
                    }
                }
            } else {
                if (features[5] <= 8.700000196695328) {
                    if (features[6] <= -90.05000001192093) {
                        classes[0] = 0; 
                        classes[1] = 2; 
                        classes[2] = 0; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 14; 
                    }
                } else {
                    classes[0] = 32; 
                    classes[1] = 9; 
                    classes[2] = 0; 
                }
            }
        } else {
            if (features[5] <= -89.30000001192093) {
                classes[0] = 0; 
                classes[1] = 193; 
                classes[2] = 0; 
            } else {
                if (features[5] <= 14.699999630451202) {
                    classes[0] = 0; 
                    classes[1] = 0; 
                    classes[2] = 228; 
                } else {
                    if (features[1] <= 273.051513671875) {
                        classes[0] = 0; 
                        classes[1] = 25; 
                        classes[2] = 0; 
                    } else {
                        if (features[6] <= -78.97400283813477) {
                            classes[0] = 0; 
                            classes[1] = 1; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 18; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        }
                    }
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[11] <= 0.8449714779853821) {
            if (features[20] <= -0.15000000223517418) {
                if (features[2] <= 323.5540008544922) {
                    if (features[6] <= 2.5752500519156456) {
                        if (features[6] <= -89.50049695372581) {
                            classes[0] = 0; 
                            classes[1] = 6; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 5; 
                        }
                    } else {
                        if (features[16] <= -0.5520000010728836) {
                            if (features[1] <= 108.7504997253418) {
                                classes[0] = 3; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                            } else {
                                classes[0] = 0; 
                                classes[1] = 1; 
                                classes[2] = 0; 
                            }
                        } else {
                            classes[0] = 14; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        }
                    }
                } else {
                    if (features[5] <= 114.3010025024414) {
                        classes[0] = 54; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 2; 
                        classes[2] = 0; 
                    }
                }
            } else {
                if (features[8] <= -0.25199999660253525) {
                    if (features[6] <= -89.60100251436234) {
                        classes[0] = 0; 
                        classes[1] = 218; 
                        classes[2] = 0; 
                    } else {
                        if (features[7] <= 0.17302533984184265) {
                            if (features[5] <= 23.952999114990234) {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 6; 
                            } else {
                                if (features[2] <= 247.4000015258789) {
                                    classes[0] = 0; 
                                    classes[1] = 1; 
                                    classes[2] = 0; 
                                } else {
                                    classes[0] = 6; 
                                    classes[1] = 0; 
                                    classes[2] = 0; 
                                }
                            }
                        } else {
                            if (features[4] <= -90.85149693489075) {
                                classes[0] = 0; 
                                classes[1] = 2; 
                                classes[2] = 0; 
                            } else {
                                if (features[6] <= 90.05099791288376) {
                                    classes[0] = 0; 
                                    classes[1] = 0; 
                                    classes[2] = 19; 
                                } else {
                                    classes[0] = 0; 
                                    classes[1] = 2; 
                                    classes[2] = 0; 
                                }
                            }
                        }
                    }
                } else {
                    if (features[8] <= 0.8499999940395355) {
                        if (features[6] <= 25.05000038444996) {
                            if (features[4] <= -90.95200002193451) {
                                classes[0] = 0; 
                                classes[1] = 3; 
                                classes[2] = 0; 
                            } else {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 166; 
                            }
                        } else {
                            classes[0] = 4; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        }
                    } else {
                        if (features[0] <= 160.40000009536743) {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 1; 
                        } else {
                            classes[0] = 7; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        }
                    }
                }
            }
        } else {
            if (features[20] <= -0.25199999660253525) {
                if (features[15] <= 4.237834692001343) {
                    if (features[4] <= -97.90100288391113) {
                        classes[0] = 0; 
                        classes[1] = 3; 
                        classes[2] = 0; 
                    } else {
                        if (features[13] <= 0.15000000223517418) {
                            if (features[11] <= 5.774118542671204) {
                                classes[0] = 5; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                            } else {
                                classes[0] = 0; 
                                classes[1] = 1; 
                                classes[2] = 0; 
                            }
                        } else {
                            if (features[3] <= 2.179560899734497) {
                                if (features[11] <= 7.116469621658325) {
                                    classes[0] = 46; 
                                    classes[1] = 0; 
                                    classes[2] = 0; 
                                } else {
                                    classes[0] = 0; 
                                    classes[1] = 1; 
                                    classes[2] = 0; 
                                }
                            } else {
                                classes[0] = 215; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                            }
                        }
                    }
                } else {
                    classes[0] = 0; 
                    classes[1] = 1; 
                    classes[2] = 0; 
                }
            } else {
                if (features[5] <= 14.300000011920929) {
                    if (features[13] <= 16.649999618530273) {
                        if (features[4] <= -91.10149693489075) {
                            classes[0] = 0; 
                            classes[1] = 6; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 28; 
                        }
                    } else {
                        classes[0] = 0; 
                        classes[1] = 2; 
                        classes[2] = 0; 
                    }
                } else {
                    if (features[19] <= 2.02367103099823) {
                        classes[0] = 18; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 4; 
                        classes[2] = 0; 
                    }
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[4] <= -0.05000000074505806) {
            if (features[8] <= -0.5505000054836273) {
                if (features[10] <= 0.0) {
                    if (features[21] <= 1.2999999821186066) {
                        if (features[4] <= -90.30099695920944) {
                            classes[0] = 0; 
                            classes[1] = 253; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 7; 
                        }
                    } else {
                        if (features[9] <= 26.95200002193451) {
                            classes[0] = 10; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 1; 
                            classes[2] = 0; 
                        }
                    }
                } else {
                    if (features[4] <= -2.552000045776367) {
                        if (features[7] <= 0.5955864191055298) {
                            classes[0] = 0; 
                            classes[1] = 5; 
                            classes[2] = 0; 
                        } else {
                            if (features[3] <= 14.686152935028076) {
                                classes[0] = 4; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                            } else {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 1; 
                            }
                        }
                    } else {
                        if (features[0] <= 53.70249938964844) {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 28; 
                        } else {
                            if (features[12] <= -2.7020000219345093) {
                                classes[0] = 1; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                            } else {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 2; 
                            }
                        }
                    }
                }
            } else {
                if (features[10] <= -0.2500000037252903) {
                    classes[0] = 0; 
                    classes[1] = 1; 
                    classes[2] = 0; 
                } else {
                    if (features[14] <= -0.15000000223517418) {
                        if (features[17] <= 2.400000035762787) {
                            classes[0] = 0; 
                            classes[1] = 3; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 1; 
                        }
                    } else {
                        if (features[4] <= -91.15149998664856) {
                            classes[0] = 0; 
                            classes[1] = 1; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 174; 
                        }
                    }
                }
            }
        } else {
            if (features[19] <= 0.010910894721746445) {
                if (features[7] <= 0.10308373346924782) {
                    classes[0] = 0; 
                    classes[1] = 5; 
                    classes[2] = 0; 
                } else {
                    classes[0] = 2; 
                    classes[1] = 0; 
                    classes[2] = 0; 
                }
            } else {
                if (features[16] <= -0.7504999935626984) {
                    if (features[19] <= 0.7041875123977661) {
                        if (features[21] <= 0.5005000084638596) {
                            if (features[0] <= 74.45050311088562) {
                                classes[0] = 1; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                            } else {
                                classes[0] = 0; 
                                classes[1] = 3; 
                                classes[2] = 0; 
                            }
                        } else {
                            if (features[9] <= -11.701000213623047) {
                                classes[0] = 0; 
                                classes[1] = 1; 
                                classes[2] = 0; 
                            } else {
                                if (features[21] <= 3.149999976158142) {
                                    classes[0] = 29; 
                                    classes[1] = 0; 
                                    classes[2] = 0; 
                                } else {
                                    if (features[8] <= 2.3000001907348633) {
                                        classes[0] = 0; 
                                        classes[1] = 1; 
                                        classes[2] = 0; 
                                    } else {
                                        classes[0] = 3; 
                                        classes[1] = 0; 
                                        classes[2] = 0; 
                                    }
                                }
                            }
                        }
                    } else {
                        classes[0] = 119; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    }
                } else {
                    classes[0] = 194; 
                    classes[1] = 0; 
                    classes[2] = 0; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[4] <= -0.05000000074505806) {
            if (features[9] <= 0.45000000298023224) {
                if (features[14] <= -0.07500000111758709) {
                    if (features[0] <= 45.350998878479004) {
                        if (features[9] <= -0.04800000786781311) {
                            classes[0] = 1; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 3; 
                        }
                    } else {
                        classes[0] = 0; 
                        classes[1] = 4; 
                        classes[2] = 0; 
                    }
                } else {
                    if (features[1] <= 319.9515075683594) {
                        classes[0] = 0; 
                        classes[1] = 173; 
                        classes[2] = 0; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 1; 
                    }
                }
            } else {
                if (features[10] <= 0.1250000037252903) {
                    if (features[10] <= -1.6510000228881836) {
                        classes[0] = 3; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    } else {
                        if (features[4] <= -90.70200002193451) {
                            classes[0] = 0; 
                            classes[1] = 41; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 5; 
                        }
                    }
                } else {
                    if (features[6] <= -1.9264999628067017) {
                        if (features[10] <= 3.2005000710487366) {
                            classes[0] = 0; 
                            classes[1] = 6; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 1; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        }
                    } else {
                        if (features[22] <= -0.10000000149011612) {
                            classes[0] = 3; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 211; 
                        }
                    }
                }
            }
        } else {
            if (features[15] <= 0.01889822445809841) {
                classes[0] = 0; 
                classes[1] = 3; 
                classes[2] = 0; 
            } else {
                if (features[23] <= 0.02074255608022213) {
                    classes[0] = 0; 
                    classes[1] = 1; 
                    classes[2] = 0; 
                } else {
                    if (features[18] <= -0.3760000020265579) {
                        if (features[9] <= 10.100500106811523) {
                            classes[0] = 59; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        } else {
                            if (features[13] <= 0.900500014424324) {
                                classes[0] = 0; 
                                classes[1] = 1; 
                                classes[2] = 0; 
                            } else {
                                classes[0] = 4; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                            }
                        }
                    } else {
                        classes[0] = 330; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    }
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[23] <= 0.08114608749747276) {
            if (features[6] <= -89.82600247859955) {
                classes[0] = 0; 
                classes[1] = 227; 
                classes[2] = 0; 
            } else {
                if (features[4] <= 22.699999999254942) {
                    classes[0] = 0; 
                    classes[1] = 0; 
                    classes[2] = 214; 
                } else {
                    if (features[5] <= 133.7514991760254) {
                        classes[0] = 11; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    } else {
                        classes[0] = 0; 
                        classes[1] = 3; 
                        classes[2] = 0; 
                    }
                }
            }
        } else {
            if (features[6] <= -90.20250248908997) {
                classes[0] = 0; 
                classes[1] = 10; 
                classes[2] = 0; 
            } else {
                if (features[7] <= 87.6766939163208) {
                    if (features[15] <= 0.049229905009269714) {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 1; 
                    } else {
                        if (features[23] <= 1.7574229836463928) {
                            classes[0] = 311; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        } else {
                            if (features[15] <= 0.5381030738353729) {
                                if (features[11] <= 5.265863060951233) {
                                    classes[0] = 2; 
                                    classes[1] = 0; 
                                    classes[2] = 0; 
                                } else {
                                    classes[0] = 0; 
                                    classes[1] = 2; 
                                    classes[2] = 0; 
                                }
                            } else {
                                classes[0] = 63; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                            }
                        }
                    }
                } else {
                    classes[0] = 0; 
                    classes[1] = 6; 
                    classes[2] = 0; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[7] <= 0.4902057647705078) {
            if (features[8] <= -0.5505000054836273) {
                if (features[5] <= -89.20000153779984) {
                    classes[0] = 0; 
                    classes[1] = 183; 
                    classes[2] = 0; 
                } else {
                    if (features[5] <= 22.604999110102654) {
                        classes[0] = 0; 
                        classes[1] = 0; 
                        classes[2] = 21; 
                    } else {
                        if (features[5] <= 137.80099868774414) {
                            classes[0] = 21; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 2; 
                            classes[2] = 0; 
                        }
                    }
                }
            } else {
                if (features[5] <= 11.0) {
                    if (features[9] <= 1.699999988079071) {
                        if (features[7] <= 0.3559693992137909) {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 162; 
                        } else {
                            if (features[10] <= 0.15000000223517418) {
                                classes[0] = 0; 
                                classes[1] = 1; 
                                classes[2] = 0; 
                            } else {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 7; 
                            }
                        }
                    } else {
                        if (features[0] <= 108.75099754333496) {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 5; 
                        } else {
                            if (features[14] <= -0.05000000074505806) {
                                classes[0] = 0; 
                                classes[1] = 4; 
                                classes[2] = 0; 
                            } else {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 3; 
                            }
                        }
                    }
                } else {
                    classes[0] = 38; 
                    classes[1] = 0; 
                    classes[2] = 0; 
                }
            }
        } else {
            if (features[15] <= 3.7340742349624634) {
                if (features[21] <= 0.15000000223517418) {
                    if (features[1] <= 349.85150146484375) {
                        if (features[4] <= -91.00000154972076) {
                            classes[0] = 0; 
                            classes[1] = 26; 
                            classes[2] = 0; 
                        } else {
                            if (features[7] <= 0.8131013512611389) {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 2; 
                            } else {
                                classes[0] = 2; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                            }
                        }
                    } else {
                        if (features[6] <= -90.25099790096283) {
                            classes[0] = 0; 
                            classes[1] = 3; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 8; 
                        }
                    }
                } else {
                    if (features[12] <= -4.3500001430511475) {
                        if (features[23] <= 0.44419071078300476) {
                            if (features[15] <= 2.0997944474220276) {
                                classes[0] = 0; 
                                classes[1] = 0; 
                                classes[2] = 1; 
                            } else {
                                classes[0] = 0; 
                                classes[1] = 1; 
                                classes[2] = 0; 
                            }
                        } else {
                            if (features[5] <= 124.20050048828125) {
                                classes[0] = 8; 
                                classes[1] = 0; 
                                classes[2] = 0; 
                            } else {
                                classes[0] = 0; 
                                classes[1] = 2; 
                                classes[2] = 0; 
                            }
                        }
                    } else {
                        if (features[7] <= 101.19513416290283) {
                            classes[0] = 336; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 4; 
                            classes[2] = 0; 
                        }
                    }
                }
            } else {
                if (features[1] <= 141.00000190734863) {
                    classes[0] = 0; 
                    classes[1] = 0; 
                    classes[2] = 7; 
                } else {
                    classes[0] = 0; 
                    classes[1] = 3; 
                    classes[2] = 0; 
                }
            }
        }
    
        return findMax(classes);
    });
    
    trees.push(function(features) {
        var classes = new Array(3);
        
        if (features[4] <= 0.0) {
            if (features[9] <= 0.25199999660253525) {
                if (features[21] <= 1.2999999821186066) {
                    classes[0] = 0; 
                    classes[1] = 184; 
                    classes[2] = 0; 
                } else {
                    classes[0] = 4; 
                    classes[1] = 0; 
                    classes[2] = 0; 
                }
            } else {
                if (features[6] <= -89.82600247859955) {
                    classes[0] = 0; 
                    classes[1] = 49; 
                    classes[2] = 0; 
                } else {
                    if (features[21] <= 1.200000025331974) {
                        if (features[23] <= 0.0936361737549305) {
                            classes[0] = 0; 
                            classes[1] = 0; 
                            classes[2] = 235; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 4; 
                            classes[2] = 0; 
                        }
                    } else {
                        if (features[23] <= 1.7042516469955444) {
                            classes[0] = 0; 
                            classes[1] = 1; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 8; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        }
                    }
                }
            }
        } else {
            if (features[4] <= 144.00100326538086) {
                if (features[11] <= 7.46140456199646) {
                    classes[0] = 297; 
                    classes[1] = 0; 
                    classes[2] = 0; 
                } else {
                    if (features[18] <= -0.2760000079870224) {
                        if (features[0] <= 224.0500030517578) {
                            classes[0] = 3; 
                            classes[1] = 0; 
                            classes[2] = 0; 
                        } else {
                            classes[0] = 0; 
                            classes[1] = 2; 
                            classes[2] = 0; 
                        }
                    } else {
                        classes[0] = 56; 
                        classes[1] = 0; 
                        classes[2] = 0; 
                    }
                }
            } else {
                classes[0] = 0; 
                classes[1] = 7; 
                classes[2] = 0; 
            }
        }
    
        return findMax(classes);
    });
    
    this.predict = function(features) {
        var classes = new Array(3).fill(0);
        for (var i = 0; i < trees.length; i++) {
            classes[trees[i](features)]++;
        }
        return findMax(classes);
    }

};

if (typeof process !== 'undefined' && typeof process.argv !== 'undefined') {
    if (process.argv.length - 2 == 24) {

        // Features:
        var features = process.argv.slice(2);

        // Prediction:
        var prediction = new RandomForestClassifier().predict(features);
        console.log(prediction);

    }
}