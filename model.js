var RandomForestClassifier = function () {
  var findMax = function (nums) {
    var index = 0;
    for (var i = 0; i < nums.length; i++) {
      index = nums[i] > nums[index] ? i : index;
    }
    return index;
  };

  var trees = new Array();

  trees.push(function (features) {
    var classes = new Array(3);

    if (features[20] <= -4.8500001430511475) {
      classes[0] = 0;
      classes[1] = 0;
      classes[2] = 297;
    } else {
      if (features[6] <= 4.350000083446503) {
        classes[0] = 0;
        classes[1] = 311;
        classes[2] = 0;
      } else {
        if (features[23] <= 0.39566467702388763) {
          if (features[4] <= 59.04999923706055) {
            classes[0] = 249;
            classes[1] = 0;
            classes[2] = 0;
          } else {
            if (features[8] <= 2.25) {
              classes[0] = 12;
              classes[1] = 0;
              classes[2] = 0;
            } else {
              classes[0] = 0;
              classes[1] = 0;
              classes[2] = 1;
            }
          }
        } else {
          if (features[23] <= 0.4854399412870407) {
            if (features[13] <= 0.550000011920929) {
              classes[0] = 2;
              classes[1] = 0;
              classes[2] = 8;
            } else {
              classes[0] = 8;
              classes[1] = 0;
              classes[2] = 0;
            }
          } else {
            if (features[21] <= 4.5) {
              classes[0] = 15;
              classes[1] = 0;
              classes[2] = 0;
            } else {
              classes[0] = 4;
              classes[1] = 0;
              classes[2] = 2;
            }
          }
        }
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(3);

    if (features[3] <= 32.88445281982422) {
      if (features[15] <= 0.0836908109486103) {
        classes[0] = 0;
        classes[1] = 128;
        classes[2] = 0;
      } else {
        if (features[7] <= 0.3284171521663666) {
          if (features[17] <= 0.5000000149011612) {
            if (features[16] <= -0.5499999970197678) {
              classes[0] = 0;
              classes[1] = 3;
              classes[2] = 0;
            } else {
              classes[0] = 0;
              classes[1] = 0;
              classes[2] = 1;
            }
          } else {
            classes[0] = 0;
            classes[1] = 19;
            classes[2] = 0;
          }
        } else {
          if (features[0] <= 274.0) {
            classes[0] = 4;
            classes[1] = 0;
            classes[2] = 0;
          } else {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 1;
          }
        }
      }
    } else {
      if (features[1] <= 356.40000915527344) {
        if (features[19] <= 1.0894317626953125) {
          if (features[1] <= 257.0499954223633) {
            classes[0] = 66;
            classes[1] = 0;
            classes[2] = 0;
          } else {
            if (features[13] <= 0.05000000074505806) {
              classes[0] = 0;
              classes[1] = 121;
              classes[2] = 0;
            } else {
              classes[0] = 218;
              classes[1] = 42;
              classes[2] = 5;
            }
          }
        } else {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 176;
        }
      } else {
        if (features[9] <= 1.9500000476837158) {
          classes[0] = 0;
          classes[1] = 10;
          classes[2] = 0;
        } else {
          if (features[20] <= -4.349999904632568) {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 96;
          } else {
            classes[0] = 19;
            classes[1] = 0;
            classes[2] = 0;
          }
        }
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(3);

    if (features[21] <= 2.950000047683716) {
      if (features[15] <= 0.038612330332398415) {
        if (features[13] <= 0.05000000074505806) {
          classes[0] = 0;
          classes[1] = 216;
          classes[2] = 0;
        } else {
          if (features[17] <= 0.05000000074505806) {
            classes[0] = 0;
            classes[1] = 20;
            classes[2] = 0;
          } else {
            if (features[11] <= 2.2248947769403458) {
              classes[0] = 0;
              classes[1] = 14;
              classes[2] = 0;
            } else {
              classes[0] = 1;
              classes[1] = 0;
              classes[2] = 0;
            }
          }
        }
      } else {
        if (features[0] <= 4.550000071525574) {
          if (features[19] <= 0.13019845634698868) {
            if (features[11] <= 1.3940444141626358) {
              classes[0] = 0;
              classes[1] = 15;
              classes[2] = 0;
            } else {
              classes[0] = 7;
              classes[1] = 0;
              classes[2] = 0;
            }
          } else {
            if (features[19] <= 0.22436050325632095) {
              classes[0] = 11;
              classes[1] = 0;
              classes[2] = 0;
            } else {
              classes[0] = 6;
              classes[1] = 1;
              classes[2] = 0;
            }
          }
        } else {
          if (features[17] <= 1.25) {
            if (features[19] <= 0.07037876173853874) {
              classes[0] = 43;
              classes[1] = 13;
              classes[2] = 0;
            } else {
              classes[0] = 218;
              classes[1] = 2;
              classes[2] = 3;
            }
          } else {
            if (features[1] <= 282.4500045776367) {
              classes[0] = 0;
              classes[1] = 7;
              classes[2] = 0;
            } else {
              classes[0] = 9;
              classes[1] = 3;
              classes[2] = 0;
            }
          }
        }
      }
    } else {
      if (features[2] <= 144.75) {
        classes[0] = 0;
        classes[1] = 0;
        classes[2] = 145;
      } else {
        if (features[16] <= -0.45000001788139343) {
          if (features[15] <= 0.6765070259571075) {
            if (features[5] <= 64.14999961853027) {
              classes[0] = 0;
              classes[1] = 0;
              classes[2] = 10;
            } else {
              classes[0] = 2;
              classes[1] = 0;
              classes[2] = 0;
            }
          } else {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 162;
          }
        } else {
          classes[0] = 1;
          classes[1] = 0;
          classes[2] = 0;
        }
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(3);

    if (features[16] <= -1.6500000357627869) {
      if (features[4] <= 20.899999618530273) {
        if (features[11] <= 1.281369388103485) {
          classes[0] = 0;
          classes[1] = 1;
          classes[2] = 0;
        } else {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 288;
        }
      } else {
        if (features[8] <= -9.5) {
          classes[0] = 3;
          classes[1] = 0;
          classes[2] = 0;
        } else {
          if (features[19] <= 0.3230036050081253) {
            classes[0] = 1;
            classes[1] = 0;
            classes[2] = 0;
          } else {
            if (features[14] <= 0.0) {
              classes[0] = 0;
              classes[1] = 0;
              classes[2] = 3;
            } else {
              classes[0] = 1;
              classes[1] = 0;
              classes[2] = 3;
            }
          }
        }
      }
    } else {
      if (features[6] <= 4.350000083446503) {
        classes[0] = 0;
        classes[1] = 315;
        classes[2] = 0;
      } else {
        if (features[17] <= 0.2500000074505806) {
          classes[0] = 90;
          classes[1] = 0;
          classes[2] = 0;
        } else {
          if (features[8] <= 0.2500000074505806) {
            if (features[20] <= -1.6500000357627869) {
              classes[0] = 12;
              classes[1] = 0;
              classes[2] = 1;
            } else {
              classes[0] = 180;
              classes[1] = 0;
              classes[2] = 0;
            }
          } else {
            if (features[11] <= 2.079647123813629) {
              classes[0] = 0;
              classes[1] = 0;
              classes[2] = 4;
            } else {
              classes[0] = 5;
              classes[1] = 0;
              classes[2] = 2;
            }
          }
        }
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(3);

    if (features[15] <= 0.4891624301671982) {
      if (features[6] <= 5.649999797344208) {
        classes[0] = 0;
        classes[1] = 306;
        classes[2] = 0;
      } else {
        if (features[3] <= 6.915950894355774) {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 2;
        } else {
          if (features[2] <= 287.5749969482422) {
            if (features[1] <= 359.75) {
              classes[0] = 185;
              classes[1] = 0;
              classes[2] = 3;
            } else {
              classes[0] = 17;
              classes[1] = 0;
              classes[2] = 3;
            }
          } else {
            classes[0] = 81;
            classes[1] = 0;
            classes[2] = 0;
          }
        }
      }
    } else {
      if (features[0] <= 245.3000030517578) {
        if (features[2] <= 148.375) {
          if (features[17] <= 2.400000035762787) {
            classes[0] = 1;
            classes[1] = 0;
            classes[2] = 0;
          } else {
            if (features[18] <= 0.2500000074505806) {
              classes[0] = 1;
              classes[1] = 0;
              classes[2] = 6;
            } else {
              classes[0] = 0;
              classes[1] = 0;
              classes[2] = 128;
            }
          }
        } else {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 175;
        }
      } else {
        classes[0] = 1;
        classes[1] = 0;
        classes[2] = 0;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(3);

    if (features[19] <= 0.9094977974891663) {
      if (features[13] <= 0.05000000074505806) {
        classes[0] = 0;
        classes[1] = 213;
        classes[2] = 0;
      } else {
        if (features[19] <= 0.026960019022226334) {
          classes[0] = 0;
          classes[1] = 35;
          classes[2] = 0;
        } else {
          if (features[10] <= 0.550000011920929) {
            if (features[21] <= 0.2500000074505806) {
              classes[0] = 1;
              classes[1] = 43;
              classes[2] = 0;
            } else {
              classes[0] = 66;
              classes[1] = 2;
              classes[2] = 0;
            }
          } else {
            if (features[9] <= 8.099999904632568) {
              classes[0] = 72;
              classes[1] = 0;
              classes[2] = 0;
            } else {
              classes[0] = 159;
              classes[1] = 0;
              classes[2] = 6;
            }
          }
        }
      }
    } else {
      classes[0] = 0;
      classes[1] = 0;
      classes[2] = 312;
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(3);

    if (features[11] <= 0.5460771918296814) {
      classes[0] = 0;
      classes[1] = 278;
      classes[2] = 0;
    } else {
      if (features[1] <= 336.3999938964844) {
        if (features[20] <= -4.8500001430511475) {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 153;
        } else {
          if (features[19] <= 0.19991659373044968) {
            if (features[17] <= 0.3500000089406967) {
              classes[0] = 104;
              classes[1] = 0;
              classes[2] = 1;
            } else {
              classes[0] = 94;
              classes[1] = 0;
              classes[2] = 0;
            }
          } else {
            if (features[22] <= 0.05000000074505806) {
              classes[0] = 32;
              classes[1] = 0;
              classes[2] = 2;
            } else {
              classes[0] = 8;
              classes[1] = 0;
              classes[2] = 0;
            }
          }
        }
      } else {
        if (features[10] <= -9.425000190734863) {
          classes[0] = 5;
          classes[1] = 0;
          classes[2] = 0;
        } else {
          if (features[20] <= -4.349999904632568) {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 183;
          } else {
            classes[0] = 49;
            classes[1] = 0;
            classes[2] = 0;
          }
        }
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(3);

    if (features[16] <= -2.100000023841858) {
      if (features[16] <= -3.850000023841858) {
        if (features[14] <= -0.02500000037252903) {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 183;
        } else {
          if (features[10] <= -0.05000000074505806) {
            if (features[19] <= 1.3707226514816284) {
              classes[0] = 1;
              classes[1] = 2;
              classes[2] = 0;
            } else {
              classes[0] = 0;
              classes[1] = 0;
              classes[2] = 33;
            }
          } else {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 67;
          }
        }
      } else {
        if (features[14] <= -0.15000000223517418) {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 15;
        } else {
          if (features[11] <= 12.365907192230225) {
            if (features[18] <= 0.20000000670552254) {
              classes[0] = 2;
              classes[1] = 1;
              classes[2] = 4;
            } else {
              classes[0] = 0;
              classes[1] = 0;
              classes[2] = 17;
            }
          } else {
            classes[0] = 3;
            classes[1] = 0;
            classes[2] = 0;
          }
        }
      }
    } else {
      if (features[8] <= -0.949999988079071) {
        if (features[16] <= -0.8499999940395355) {
          if (features[18] <= 0.05000000074505806) {
            if (features[6] <= 13.999999612569809) {
              classes[0] = 0;
              classes[1] = 3;
              classes[2] = 0;
            } else {
              classes[0] = 15;
              classes[1] = 0;
              classes[2] = 0;
            }
          } else {
            if (features[8] <= -5.549999952316284) {
              classes[0] = 1;
              classes[1] = 0;
              classes[2] = 1;
            } else {
              classes[0] = 2;
              classes[1] = 0;
              classes[2] = 0;
            }
          }
        } else {
          if (features[1] <= 278.8999938964844) {
            if (features[10] <= 2.225000023841858) {
              classes[0] = 37;
              classes[1] = 0;
              classes[2] = 1;
            } else {
              classes[0] = 48;
              classes[1] = 0;
              classes[2] = 0;
            }
          } else {
            classes[0] = 150;
            classes[1] = 0;
            classes[2] = 0;
          }
        }
      } else {
        if (features[16] <= -0.15000000223517418) {
          if (features[21] <= 0.2500000074505806) {
            classes[0] = 0;
            classes[1] = 41;
            classes[2] = 0;
          } else {
            if (features[15] <= 0.057296907529234886) {
              classes[0] = 0;
              classes[1] = 2;
              classes[2] = 0;
            } else {
              classes[0] = 35;
              classes[1] = 0;
              classes[2] = 4;
            }
          }
        } else {
          classes[0] = 0;
          classes[1] = 241;
          classes[2] = 0;
        }
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(3);

    if (features[7] <= 3.7219011783599854) {
      if (features[4] <= 4.400000184774399) {
        classes[0] = 0;
        classes[1] = 273;
        classes[2] = 0;
      } else {
        if (features[20] <= -5.0) {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 4;
        } else {
          if (features[11] <= 1.273788034915924) {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 3;
          } else {
            if (features[19] <= 0.126999169588089) {
              classes[0] = 144;
              classes[1] = 0;
              classes[2] = 0;
            } else {
              classes[0] = 144;
              classes[1] = 0;
              classes[2] = 3;
            }
          }
        }
      }
    } else {
      if (features[11] <= 4.4972193241119385) {
        if (features[6] <= 29.0) {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 66;
        } else {
          if (features[2] <= 267.5500030517578) {
            if (features[5] <= 38.0) {
              classes[0] = 1;
              classes[1] = 0;
              classes[2] = 0;
            } else {
              classes[0] = 1;
              classes[1] = 0;
              classes[2] = 19;
            }
          } else {
            if (features[8] <= -8.599999904632568) {
              classes[0] = 0;
              classes[1] = 0;
              classes[2] = 3;
            } else {
              classes[0] = 7;
              classes[1] = 0;
              classes[2] = 0;
            }
          }
        }
      } else {
        if (features[18] <= -0.05000000074505806) {
          if (features[22] <= -1.175000000745058) {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 4;
          } else {
            if (features[3] <= 37.82361030578613) {
              classes[0] = 0;
              classes[1] = 0;
              classes[2] = 2;
            } else {
              classes[0] = 2;
              classes[1] = 0;
              classes[2] = 1;
            }
          }
        } else {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 232;
        }
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(3);

    if (features[0] <= 0.05000000074505806) {
      if (features[20] <= -0.4000000059604645) {
        if (features[14] <= 0.2500000074505806) {
          if (features[19] <= 1.342969462275505) {
            classes[0] = 6;
            classes[1] = 0;
            classes[2] = 0;
          } else {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 4;
          }
        } else {
          classes[0] = 0;
          classes[1] = 0;
          classes[2] = 3;
        }
      } else {
        if (features[10] <= 0.4999999701976776) {
          classes[0] = 0;
          classes[1] = 56;
          classes[2] = 0;
        } else {
          classes[0] = 2;
          classes[1] = 0;
          classes[2] = 0;
        }
      }
    } else {
      if (features[16] <= -2.100000023841858) {
        if (features[16] <= -3.450000047683716) {
          if (features[4] <= 45.19999885559082) {
            classes[0] = 0;
            classes[1] = 0;
            classes[2] = 262;
          } else {
            classes[0] = 4;
            classes[1] = 0;
            classes[2] = 0;
          }
        } else {
          if (features[8] <= -1.0999999940395355) {
            if (features[14] <= 0.02500000037252903) {
              classes[0] = 0;
              classes[1] = 0;
              classes[2] = 10;
            } else {
              classes[0] = 4;
              classes[1] = 0;
              classes[2] = 10;
            }
          } else {
            classes[0] = 0;
            classes[1] = 1;
            classes[2] = 0;
          }
        }
      } else {
        if (features[17] <= 0.05000000074505806) {
          classes[0] = 0;
          classes[1] = 196;
          classes[2] = 0;
        } else {
          if (features[11] <= 0.5986182689666748) {
            classes[0] = 0;
            classes[1] = 54;
            classes[2] = 0;
          } else {
            if (features[9] <= 8.099999904632568) {
              classes[0] = 128;
              classes[1] = 0;
              classes[2] = 0;
            } else {
              classes[0] = 158;
              classes[1] = 0;
              classes[2] = 11;
            }
          }
        }
      }
    }

    return findMax(classes);
  });

  this.predict = function (features) {
    var classes = new Array(3).fill(0);
    for (var i = 0; i < trees.length; i++) {
      classes[trees[i](features)]++;
    }
    return findMax(classes);
  };
};

export default function execute(features) {
  // Prediction:
  var prediction = new RandomForestClassifier().predict(features);
  return prediction;
}
