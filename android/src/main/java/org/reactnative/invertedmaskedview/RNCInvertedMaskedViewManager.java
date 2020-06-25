package org.reactnative.invertedmaskedview;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;

public class RNCInvertedMaskedViewManager extends ViewGroupManager<RNCInvertedMaskedView> {
  private static final String REACT_CLASS = "RNCInvertedMaskedView";

  @Override
  public String getName() {
    return REACT_CLASS;
  }

  @Override
  protected RNCInvertedMaskedView createViewInstance(ThemedReactContext themedReactContext) {
    return new RNCInvertedMaskedView(themedReactContext);
  }
}
